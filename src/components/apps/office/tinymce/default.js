/*
 * @Author: Blueth007
 * @Date: 2022-03-16 14:03:24
 * @LastEditTime: 2022-03-18 16:55:51
 * @Description:
 * MIT
 */

export default {
  //selector: "#tinydemo2",
  language_url: "/tinymce/langs/zh_CN.js", //汉化路径是自定义的，一般放在public或static里面
  language: "zh_CN",
  skin_url: "/tinymce/skins/ui/oxide", //皮肤
  placeholder: "在这里输入文字",
  branding: false, //隐藏右下角技术支持
  plugins:
    "print preview exportWord  searchreplace autolink directionality visualblocks visualchars fullscreen image link media template  code  codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help  autosave bdmap   autoresize   axupimgs importword  ",
  toolbar:
    "undo redo restoredraft  | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor  | alignleft aligncenter alignright alignjustify  outdent indent  table|bullist numlist | blockquote subscript superscript removeformat | \
     styleselect formatselect fontselect fontsizeselect |  \
      image media   charmap  hr bdmap   lineheight  axupimgs importword exportWord | pagebreak insertdatetime print preview fullscreen code ",
  external_plugins: {
    importword: "/tinymce/plugins/importword/plugin.min.js",
    bdmap: "/tinymce/plugins/bdmap/plugin.js",
    axupimgs: "/tinymce/plugins/axupimgs/plugin.min.js",
    exportWord: "/tinymce/plugins/exportword/plugin.min.js",
  },
  height: 650, //编辑器高度
  min_height: 400,
  /*content_css: [ //可设置编辑区内容展示的css，谨慎使用
        '/static/reset.css',
        '/static/ax.css',
        '/static/css.css',
    ],*/
  content_style: `
    *                         { padding: 0; margin: 0;
    }
    html, body                { height: 100%;
    }
    img                       { max-width: 100%; display:block;height:auto;
    }
    a                         { text-decoration: none;
    }
    iframe                    { width: 100%;
    }
    p                         { line-height: 1.5; margin: 0px;
    }
    table                     { word-wrap:break-word; word-break:break-all; max-width: 100%; border:none; border-color:#999;
    }
    .mce-object-iframe        { width: 100%; box-sizing:border-box; margin: 0; padding: 0;
    }
    ul,ol                     { list-style-position:inside;}

    img                         {max-width:100%;}
  `,

  fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
  font_formats:
    "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;知乎配置=BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;小米配置=Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif",
  link_list: [
    { title: "预置链接1", value: "http://www.tinymce.com" },
    { title: "预置链接2", value: "http://tinymce.ax-z.cn" },
  ],
  image_list: [
    { title: "预置图片1", value: "https://www.tiny.cloud/images/glyph-tinymce@2x.png" },
    { title: "预置图片2", value: "https://www.baidu.com/img/bd_logo1.png" },
  ],
  image_class_list: [
    { title: "None", value: "" },
    { title: "Some class", value: "class-name" },
  ],
  //importcss_append: true,
  //自定义文件选择器的回调内容
  file_picker_callback: function (callback, value, meta) {
    console.log("file_picker");
    if (meta.filetype === "file") {
      callback("https://www.baidu.com/img/bd_logo1.png", { text: "My text" });
    }
    if (meta.filetype === "image") {
      callback("https://www.baidu.com/img/bd_logo1.png", { alt: "My alt text" });
    }
    if (meta.filetype === "media") {
      callback("movie.mp4", { source2: "alt.ogg", poster: "https://www.baidu.com/img/bd_logo1.png" });
    }
  },
  //为内容模板插件提供预置模板
  templates: [
    { title: "模板1", description: "介绍文字1", content: "模板内容" },
    {
      title: "模板2",
      description: "介绍文字2",
      content: '<div class="mceTmpl"><span class="cdate">CDATE</span>，<span class="mdate">MDATE</span>，我的内容</div>',
    },
  ],
  importword_handler: function (editor, files, next) {
    var file_name = files[0].name;
    if (file_name.substr(file_name.lastIndexOf(".") + 1) == "docx") {
      editor.notificationManager.open({
        text: "正在转换中...",
        type: "info",
        closeButton: false,
      });
      console.log("word.docx 导入");
      next(files);
    } else {
      editor.notificationManager.open({
        text: "目前仅支持docx文件格式，若为doc111，请将扩展名改为docx",
        type: "warning",
      });
    }
    // next(files);
  },
  bdmap_options: {
    width: 560,
    height: 360,
    //  outputIframe: "https://unpkg.com/@npkg/tinymce-plugins",
    outputIframe: "https://unpkg.com/@npkg/tinymce-plugins/plugins/bdmap/bd.html", //vue 版
    apiKey: "Go9SQWsVYtKy74jrHVsGIwzHTN49kF9T",
  },
  //content_security_policy: "script-src *;",
  extended_valid_elements: "script[src]",
  //
  paste_retain_style_properties: "all",
  paste_word_valid_elements: "*[*]",
  template_cdate_format: "[CDATE: %m/%d/%Y : %H:%M:%S]",
  template_mdate_format: "[MDATE: %m/%d/%Y : %H:%M:%S]",
  autosave_ask_before_unload: false,
  toolbar_mode: "wrap",
  automatic_uploads: false,
  images_upload_base_path: "/upload",
  //   images_upload_handler: function (blobInfo, succFun, failFun) {
  //     succFun("/demo/images/img.jpg");
  //   },
  //icons:'ax-color',
};
