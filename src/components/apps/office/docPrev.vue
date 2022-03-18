<!--
 * @Author: Blueth007
 * @Date: 2022-03-07 16:52:22
 * @LastEditTime: 2022-03-18 17:25:57
 * @Description: 
 * MIT
-->
<template>
  <div class="container">
    <h1>Docx preview</h1>
    <p style="color: red">word必须是原生新建的word且.docx格式的</p>
    <p style="color: red">分页注意在word中添加分页符</p>
    <main>
      <p>
        docx-preview:<input
          type="file"
          name="doc"
          id="doc"
          @change="inputFile"
        />
      </p>
      <p><button @click="printJS()">PrintJs打印</button></p>
      <p><button @click="printWindow()">window打印</button></p>
      <p><button @click="saveFile">下载docx</button></p>
      <div id="doc_container"></div>
    </main>
    <remote-js></remote-js>
  </div>
</template>

<script>
// import * as docx from 'docx-preview' //1.8 不能base64URL
// eslint-disable-next-line no-unused-vars
import htmlDocx from "html-docx-js/dist/html-docx";
window.JSZip = require("jszip");
export default {
  components: {
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: {
            type: "text/javascript",
            src: "/static/js/docxPreview.js",
          },
        });
      },
    },
  },
  mounted() {},
  methods: {
    inputFile(e) {
      // console.log(e.target.files);
      var docx = docx || window.docx;
      console.log(docx);
      const docxOptions = Object.assign(docx.defaultOptions, {
        className: "docx", // 默认和文档样式类的类名/前缀
        inWrapper: true, // 启用围绕文档内容渲染包装器
        useBase64URL: true, //if true, images, fonts, etc. will be converted to base 64 URL, otherwise URL.createObjectURL is used
        breakPages: true, // 在分页符上启用分页
        //  ignoreWidth: false, // 禁止页面渲染宽度
        //  ignoreHeight: false, // 禁止页面渲染高度
        //  ignoreFonts: false, // 禁止字体渲染
        ignoreLastRenderedPageBreak: true, //禁用lastRenderedPageBreak元素的分页
        //  experimental: false, //启用实验性功能（制表符停止计算）
        // trimXmlDeclaration: true, //如果为真，xml声明将在解析之前从xml文档中删除
        // debug: false, // 启用额外的日志记录
      });
      let file = e.target.files[0] || document.getElementById("doc").files[0];
      var container = document.getElementById("doc_container");
      console.log(docxOptions);
      docx
        .renderAsync(file, container, null, docxOptions)
        .then((x) => {
          console.log(x);
          var sections = container.getElementsByTagName("section");
          for (let index = 0; index < sections.length; index++) {
            var element = sections[index];
            element.style.boxShadow = "none";
          }
        })
        .catch((err) => alert("上传文件格式必须是.docx" + err));
    },
    printJS() {
      // 此处的style即为打印时自定义的样式
      // const style ="@page { margin-top: 0; }  .docx { color: red!important; } @media print { .docx { color: blue!important;   box-shadow:none!important;}  section {padding:0 auto !important;} }";
      var style = `
      body{
        padding:0;
          margin-top:0;
      }
      .docx {
          color:blue !important;
      }

      `;
      this.$print({
        printable: "doc_container",
        type: "html",
        style,
        scanStyles: false,
        // 继承原来的所有样式
        // targetStyles: ["*"],
      });
    },
    printWindow() {
      var printHTML = document.getElementById("doc_container").innerHTML; // 获取要打印的内容
      var page = window.open("", "_blank"); // 打开一个空表窗口，用于打印
      page.document.write(printHTML); // 打印页面的内容
      page.print(); // 打印
      var userAgent = navigator.userAgent;
      if (
        (userAgent.indexOf("compatible") > -1 &&
          userAgent.indexOf("MSIE") > -1) ||
        userAgent.indexOf("Edge") > -1 ||
        (userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1)
      ) {
        // IE浏览器
        page.document.execCommand("print");
      } else {
        console.log("not IE");
        page.document.execCommand("print");
      }
    },
    saveFile() {
      this.convertImagesToBase64("doc_container");
      let content = document.getElementById("doc_container");
      const styles = content.querySelectorAll("style");
      let style = [];
      styles.forEach((item) => {
        style.push(item.innerText);
      });

      let time = new Date() - 1;
      style.push(
        "@page { size: 8.27in 11.69in; margin-left: 1.25in; margin-right: 1.25in; margin-top: 1in; margin-bottom: 1in } p {margin-bottom: 0.1in;direction: ltr;line-height: 115%;text-align: justify;orphans: 0;widows: 0;background: transparent}"
      );
      var page =
        '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>' +
        style.join("") +
        "</style></head><body>" +
        content.outerHTML +
        "</body></html>";
      var converted = htmlDocx.asBlob(page, {
        orientation: "orientation",
        // type: "application/msword;charset=utf-8",
      });
      console.log(style.join(""));
      // 用 FielSaver.js里的保存方法 进行输出
      this.$saveAs(converted, time + ".docx");
    },

    convertImagesToBase64(id) {
      var contentDocument = document.getElementById(id);
      var regularImages = contentDocument.querySelectorAll("img");
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      [].forEach.call(regularImages, function (imgElement) {
        // preparing canvas for drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = imgElement.width;
        canvas.height = imgElement.height;

        ctx.drawImage(imgElement, 0, 0);
        // by default toDataURL() produces png image, but you can also export to jpeg
        // checkout function's documentation for more details
        var dataURL = canvas.toDataURL();
        imgElement.setAttribute("src", dataURL);
      });
      canvas.remove();
    },
  },
};
</script>

<style lang="scss" scoped>
@media print {
  #doc_container {
    page-break-after: always;
  }
  body,
  html {
    height: inherit;
  }
}
</style>
