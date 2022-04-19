<template>
  <div class="home_wrap">
    <div class="control">
      <p><input type="file" @change="inputFile" value="本地pdf" /></p>
      <p>
        <input
          type="text"
          @change="remoteFile"
          placeholder="http://...."
        /><button @click="_loadFile(pdf_src)">远程pdf地址</button>
      </p>
      <p><button @click="openPdf()">网址内另开页面打开</button></p>
    </div>
    <div class="pdf_down">
      <div class="pdf_set_left" @click="scaleD()">放大</div>
      <div class="pdf_set_middle" @click="scaleX()">缩小</div>
    </div>
    <div class="pdf_view">
      <div v-if="loading" class="loading">loading....</div>

      <div :style="{ width: pdf_div_width, margin: '0 auto' }">
        <canvas
          v-for="page in pdf_pages"
          :id="'the_canvas' + page"
          :key="page"
        ></canvas>
      </div>
    </div>
  </div>
</template>

<script>
let PDFJS = require("pdfjs-dist");
PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");
export default {
  data() {
    return {
      pdf_scale: 1.0, //pdf放大系数
      pdf_pages: [],
      pdf_div_width: "",
      pdf_src: null,
      loading: true,
    };
  },
  mounted() {
    this.loading = true;
    this.get_pdfurl();
  },
  methods: {
    inputFile(e) {
      var imgURL = window.URL.createObjectURL(e.target.files[0]);
      console.log(imgURL);
      // window.open(imgURL, "__blank");
      var iHeight = 800,
        iWidth = 1200;
      var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
      //获得窗口的水平位置
      var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
      var p = window.open(
        imgURL,
        "PDFPreview",
        "height=" +
          iHeight +
          ",innerHeight=" +
          iHeight +
          ",width=" +
          iWidth +
          ",innerWidth=" +
          iWidth +
          ",top=" +
          iTop +
          ",left=" +
          iLeft +
          ",status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no"
      );
      // var p = window.open(
      //   imgURL,
      //   "PDFPreview",
      //   "toolbar=no,menubar=no,resizable=yes,height=690px,width=820px,z-look=yes"
      // );
      p.focus();
    },
    remoteFile(e) {
      this.pdf_src = e.target.value;
      this.get_pdfurl();
    },
    openPdf() {
      let fileURL =
        this.pdf_src ||
        "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" ||
        "./20210922.pdf";
      var iHeight = 800,
        iWidth = 1200;
      var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
      //获得窗口的水平位置
      var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
      var p = window.open(
        fileURL,
        "PDFPreview",
        "height=" +
          iHeight +
          ",innerHeight=" +
          iHeight +
          ",width=" +
          iWidth +
          ",innerWidth=" +
          iWidth +
          ",top=" +
          iTop +
          ",left=" +
          iLeft +
          ",status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no"
      );
      p.focus();
    },
    scaleD() {
      //放大
      console.log("放大");
      let max = 0;
      if (window.screen.width > 1440) {
        max = 2;
      } else {
        max = 1.5;
      }
      if (this.pdf_scale >= max) {
        return;
      }
      this.pdf_scale = this.pdf_scale + 0.3;
      this._loadFile(this.pdf_src);
    },
    scaleX() {
      //缩小
      console.log("缩小");
      let min = 1.0;
      if (this.pdf_scale <= min) {
        return;
      }
      this.pdf_scale = this.pdf_scale - 0.3;
      this._loadFile(this.pdf_src);
    },
    get_pdfurl() {
      //获得pdf教案
      //加载本地
      this.pdf_src = //require("./20210922.pdf");
        "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";
      // this.pdf_src = 'http://kaoshiftp.book118.com//%E5%B0%8F%E5%AD%A6%E5%88%9D%E4%B8%AD/%E5%88%9D%E4%B8%AD%E6%95%B0%E5%AD%A6/%E6%B5%B7%E6%B7%80%E8%A7%A3%E9%A2%98%E9%A2%98%E5%85%B8-%E5%88%9D%E4%B8%AD%E6%95%B0%E5%AD%A6.pdf'
      this._loadFile(this.pdf_src);
      return;
      //线上请求
      //  this.$axios.get('')
      //  .then((res)=>{
      //  	this.pdf_src = res.url
      //  	this._loadFile(this.pdf_src)
      //  })
    },
    _loadFile(url) {
      //初始化pdf
      let loadingTask = PDFJS.getDocument(url);
      loadingTask.promise.then((pdf) => {
        this.pdfDoc = pdf;
        this.pdf_pages = this.pdfDoc.numPages;
        //debugger
        this.$nextTick(() => {
          this._renderPage(1);
        });
      });
    },
    _renderPage(num = 1) {
      //渲染pdf页
      const that = this;
      this.pdfDoc.getPage(num).then((page) => {
        try {
          let canvas = document.getElementById("the_canvas" + num);
          console.log(canvas);
          let ctx = canvas.getContext("2d");
          let dpr = window.devicePixelRatio || 1;
          let bsr =
            ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio ||
            1;
          let ratio = dpr / bsr;
          let viewport = page.getViewport({ scale: that.pdf_scale });
          canvas.width = viewport.width * ratio;
          canvas.height = viewport.height * ratio;
          canvas.style.width = viewport.width + "px";
          that.pdf_div_width = viewport.width + "px";
          canvas.style.height = viewport.height + "px";
          ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
          let renderContext = {
            canvasContext: ctx,
            viewport: viewport,
          };
          page.render(renderContext);
          if (that.pdf_pages > num) {
            that._renderPage(num + 1);
          }
          that.loading = false;
        } catch (error) {
          console.log(error);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.home_wrap {
  width: 100%;
  height: 100%;
  .pdf_down {
    position: fixed;
    display: flex;
    z-index: 20;
    right: 26px;
    bottom: 7%;
    .pdf_set_left {
      width: 60px;
      height: 64px;
      background: #ccc;
      color: #408fff;
      font-size: 18px;
      line-height: 60px;
      text-align: center;
      margin-right: 5px;
      cursor: pointer;
    }
    .pdf_set_middle {
      width: 60px;
      height: 64px;
      background: #ccc;
      color: #408fff;
      font-size: 18px;
      line-height: 60px;
      text-align: center;
      margin-right: 5px;
      cursor: pointer;
    }
  }
}

.control {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pdf_view {
  position: relative;
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: #ccc;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
