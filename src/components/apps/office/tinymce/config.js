/*
 * @Author: Blueth007
 * @Date: 2022-03-15 15:34:39
 * @LastEditTime: 2022-03-17 16:37:38
 * @Description:
 * MIT
 */
const plugins = [
  `print preview paste importcss searchreplace autolink autosave save directionality 
code autoresize visualblocks visualchars fullscreen image imagetools link media template 
codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist
 lists wordcount  textpattern noneditable help charmap quickbars emoticons `,
];
// const toolbar = ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen']
const toolbar = [
  `undo redo | bold italic underline strikethrough  forecolor backcolor  subscript superscript blockquote removeformat   | fontselect fontsizeselect formatselect | 
alignleft aligncenter alignright alignjustify `,
  ` outdent indent   numlist bullist table | searchreplace 
insertdatetime charmap emoticons codesample |
  insertfile image imagetools media template link anchor |  ltr rtl other preview  pagebreak  save print code fullscreen  |  `,
];

const config = {
  toolbar_sticky: true,
  autosave_ask_before_unload: true,
  autosave_interval: "30s",
  autosave_prefix: "{path}{query}-{id}-",
  autosave_restore_when_empty: false,
  autosave_retention: "2m",
  image_advtab: true,
  autoresize_max_height: 650, // 编辑区域的最大高
  autoresize_min_height: 350, //编辑区域的最小高度
  force_p_newlines: true,
  importcss_append: true,
  insert_button_items: "image link | inserttable",
  // CONFIG: Paste
  paste_retain_style_properties: "all",
  paste_word_valid_elements: "*[*]",
  // word需要它
  paste_data_images: true, // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
  paste_convert_word_fake_lists: false, // 插入word文档需要该属性
  paste_webkit_styles: "all",
  paste_merge_formats: true,
  nonbreaking_force_tab: false,
  paste_auto_cleanup_on_paste: false,
  // CONFIG: Font
  fontsize_formats: "10px 11px 12px 14px 16px 18px 20px 24px 36px 48px 56px",
  /* CONFIG: ContentStyle 这块很重要， 在最后呈现的页面也要写入这个基本样式保证前后一致， `table`和`img`的问题基本就靠这个来填坑了- */
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
      p                         { line-height: 1.6; margin: 0px;
      }
      table                     { word-wrap:break-word; word-break:break-all; max-width: 100%; border:none; border-color:#999;
      }
      .mce-object-iframe        { width: 100%; box-sizing:border-box; margin: 0; padding: 0;
      }
      ul,ol                     { list-style-position:inside;}
  
      img                         {max-width:100%;}
    `,

  // FontSelect
  font_formats: `
      微软雅黑=微软雅黑;
      宋体=宋体;
      黑体=黑体;
      仿宋=仿宋;
      楷体=楷体;
      隶书=隶书;
      幼圆=幼圆;
      Andale Mono=andale mono,times;
      Arial=arial, helvetica,
      sans-serif;
      Arial Black=arial black, avant garde;
      Book Antiqua=book antiqua,palatino;
      Comic Sans MS=comic sans ms,sans-serif;
      Courier New=courier new,courier;
      Georgia=georgia,palatino;
      Helvetica=helvetica;
      Impact=impact,chicago;
      Symbol=symbol;
      Tahoma=tahoma,arial,helvetica,sans-serif;
      Terminal=terminal,monaco;
      Times New Roman=times new roman,times;
      Trebuchet MS=trebuchet ms,geneva;
      Verdana=verdana,geneva;
      Webdings=webdings;
      Wingdings=wingdings,zapf dingbats`,
  // Tab
  tabfocus_elements: ":prev,:next",
  object_resizing: true,
  // Image
  imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions",
  image_caption: true,
  // 图片工具需要跨域
  quickbars_selection_toolbar: "bold italic | quicklink h2 h3 lineheight | blockquote quickimage quicktable",
  branding: false, // 隐藏右下角技术支持，这个可以自行切换true/false看看到底是什么
  automatic_uploads: true,
  toolbar_drawer: false,
  pagebreak_split_block: true, // pagebreak_split_block 插入时拆分块元素
  auto_focus: true, //  自动获取焦点
  contextmenu: "copy cut  paste | image inserttable link  | cell row column deletetable", // 鼠标右键菜单
};

export { toolbar, config, plugins };
