<!--
 * @Author: Blueth007
 * @Date: 2022-03-15 12:34:49
 * @LastEditTime: 2022-03-18 12:22:38
 * @Description: 
 * MIT
-->
<template>
  <div class="tinymce-editor">
    <Editor :id="tinymceId" :init="init" v-model="myValue"></Editor>
    <button @click="getValue">获取值</button>
    <div class="htmlView" v-html="myValue"></div>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce"; //tinymce默认hidden，不引入不显示
import Editor from "@tinymce/tinymce-vue"; //编辑器引入
import "tinymce/themes/silver/theme"; //编辑器主题
import "tinymce/icons/default"; //引入编辑器图标icon，不引入则不显示对应图标
// 引入编辑器插件（基本免费插件都在这儿了）
// import "tinymce/plugins/advlist"; //高级列表
import "../office/tinymce/plugins";
import defaultConfig from "../office/tinymce/default";
export default {
  components: {
    Editor,
  },

  data() {
    return {
      //初始化配置
      tinymceId: "tinymce",
      myValue: "",
      init: {
        selector: "#tinymce",
        ...defaultConfig,
        //图片上传
        images_upload_handler: function (blobInfo, success, failure) {
          //文件上传的formData传递，忘记为什么要用这个了
          const isAccord =
            blobInfo.blob().type === "image/jpeg" ||
            blobInfo.blob().type === "image/png" ||
            blobInfo.blob().type === "image/GIF" ||
            blobInfo.blob().type === "image/jpg" ||
            blobInfo.blob().type === "image/BMP";
          if (blobInfo.blob().size / 1024 / 1024 > 2) {
            failure("上传失败，图片大小请控制在 2M 以内");
          } else if (blobInfo.blob().type == isAccord) {
            failure("图片格式错误");
          } else {
            let formData = new FormData();
            // 服务端接收文件的参数名，文件数据，文件名
            formData.append("file", blobInfo.blob(), blobInfo.filename());
            // axios({
            //   method: "POST",
            //   headers: {
            //     Authorization: "bearer ",
            //   },
            //   // 这里是你的上传地址
            //   url: window.SITE_CONFIG["apiURL"] + "/oss/file/upload",
            //   data: formData,
            // })
            //   .then((res) => {
            //     console.log(res);
            //     // 这里返回的是你图片的地址
            //     success(res.data.data.url);
            //   })
            //   .catch(() => {
            //     failure("上传失败");
            //   });
          }
        },
      },
    };
  },
  watch: {
    //监听内容变化
    value(newValue) {
      console.log(newValue);
      this.myValue = newValue == null ? "" : newValue;
    },
  },
  mounted() {
    tinymce.init({});
    
  },
  methods: {
    getValue() {
      console.log(tinymce.activeEditor.execCommand("mcePreview"));
      // this.myValue = tinymce().execCommand("mcePreview");
    },
   
    
    //可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.officeView {
  * {
    padding: 0 !important;
    margin: 0 !important;
  }
  html,
  body {
    height: 100%;
  }
  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
  a {
    text-decoration: none;
  }
  iframe {
    width: 100%;
  }
  p {
    line-height: 1.6;
    margin: 0px;
  }
  table {
    word-wrap: break-word;
    word-break: break-all;
    max-width: 100%;
    border: none;
    border-color: #999;
  }
  .mce-object-iframe {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ul,
  ol {
    list-style-position: inside;
  }

  img {
    max-width: 100%;
  }
}
</style>
