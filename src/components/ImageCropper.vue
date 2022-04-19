<template>
  <div>
    <div class="info-item">
      <label class="btn btn-orange" for="uploads">选择图片</label>
      <input
        type="file"
        style="position: absolute; left: -9999px; top: -9999px"
        id="uploads"
        :value="imgFile"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="uploadImg($event, 1)"
      />
      <input
        type="button"
        class="btn"
        value="refresh"
        title="刷新"
        @click="refreshCrop"
      />
      <input
        type="button"
        class="btn"
        value="+"
        title="放大"
        @click="changeScale(1)"
      />
      <input
        type="button"
        class="btn"
        value="-"
        title="缩小"
        @click="changeScale(-1)"
      />
      <input
        type="button"
        class="btn"
        value="↺"
        title="左旋转"
        @click="rotateLeft"
      />
      <input
        type="button"
        class="btn"
        value="↻"
        title="右旋转"
        @click="rotateRight"
      />
      <input
        type="button"
        class="btn"
        value="↓"
        title="下载"
        @click="down('blob')"
      />

      <input
        type="button"
        class="btn"
        value="上传头像blob"
        @click="finish('blob')"
        v-debounce
      />
      <input
        type="button"
        class="btn"
        value="上传头像base64"
        @click="finish('base64')"
        v-debounce
      />
    </div>

    <div class="cropper-content">
      <div class="cropper">
        <vueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :full="option.full"
          :original="option.original"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :fixedBox="option.fixedBox"
          @realTime="realTime"
          @imgLoad="imgLoad"
        ></vueCropper>
      </div>

      <div class="show-preview">
        <div :style="previews.div" class="preview">
          <img :src="previews.url" :style="previews.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";

export default {
  data() {
    return {
      headImg: "",
      //剪切图片上传
      crap: false,
      previews: {},
      option: {
        img: "",
        outputSize: 1, //剪切后的图片质量（0.1-1）
        full: false, //输出原图比例截图 props名full
        outputType: "png",
        original: false,
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixedBox: false,
      },
      fileName: "", //本机文件地址
      downImg: "#",
      imgFile: "",
      uploadImgRelaPath: "", //上传后的图片的地址（不带服务器域名）
    };
  },
  components: {
    VueCropper,
  },
  watch: {},
  methods: {
    //放大/缩小
    changeScale(num) {
      console.log("changeScale");
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    //刷新
    refreshCrop() {
      // clear
      this.$refs.cropper.refresh();
    },
    //坐旋转
    rotateLeft() {
      console.log("rotateLeft");
      this.$refs.cropper.rotateLeft();
    },
    //右旋转
    rotateRight() {
      console.log("rotateRight");
      this.$refs.cropper.rotateRight();
    },
    //上传图片（点击上传按钮）
    finish(type) {
      console.log("finish");
      let _this = this;
      let formData = new FormData();
      // 输出
      if (type === "blob") {
        this.$refs.cropper.getCropBlob((data) => {
          let img = window.URL.createObjectURL(data);
          this.model = true;
          _this.modelSrc = img;
          formData.append("file", data, this.fileName);
          // this.$http.post(Api.uploadSysHeadImg.url, formData, {contentType: false, processData: false, headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
          // .then((response)=>{
          //   var res = response.data;
          //   if(res.success == 1){
          //     $('#btn1').val('');
          //     _this.imgFile = '';
          //     _this.headImg = res.realPathList[0];  //完整路径
          //     _this.uploadImgRelaPath = res.relaPathList[0];  //非完整路径
          //     _this.$message({ //element-ui的消息Message消息提示组件
          //       type: 'success',
          //       message: '上传成功'
          //     });
          //   }
          // })
          console.log("post:", formData, img);
          this.$store.commit("user/setAvatars", img);
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.model = true;
          this.modelSrc = data;
          console.log(data);
        });
      }
    },
    // 实时预览函数
    realTime(data) {
      this.previews = data;
    },
    //下载图片
    down(type) {
      console.log("down");
      var aLink = document.createElement("a");
      aLink.download = "author-img" + new Date() - 1;
      if (type === "blob") {
        this.$refs.cropper.getCropBlob((data) => {
          this.downImg = window.URL.createObjectURL(data);
          aLink.href = window.URL.createObjectURL(data);
          aLink.click();
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.downImg = data;
          aLink.href = data;
          aLink.click();
        });
      }
    },
    //选择本地图片
    uploadImg(e, num) {
      console.log("uploadImg");
      var _this = this;
      //上传图片
      var file = e.target.files[0];
      _this.fileName = file.name;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = (e) => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          _this.option.img = data;
        } else if (num === 2) {
          _this.example2.img = data;
        }
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },
    imgLoad(msg) {
      console.log("imgLoad");
      console.log(msg);
    },
  },
};
</script>

<style lang="scss" scoped>
.cropper-content {
  padding: 20px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  -webkit-justify-content: space-around;
  .cropper {
    width: 400px;
    height: 400px;
  }
  .show-preview {
    display: flex;
    display: -webkit-flex;
    width: 40%;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    .preview {
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid #cccccc;
      background: #cccccc;
    }
  }
}

.btn {
  outline: none;
  padding: 8px 16px;
  margin: 8px;
  border-radius: 8px;
  background: linear-gradient(315deg, #5bc6ff, #4da7db);
  box-shadow: 0px 0px 3px #54b7f1, 0px 0px 3px #56bbf5;
}
</style>
