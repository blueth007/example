<!--
 * @Author: Blueth007
 * @Date: 2022-03-07 16:55:12
 * @LastEditTime: 2022-03-14 14:20:30
 * @Description: 
 * MIT
-->
<template>
  <div class="excel_container">
    <h2>excelPreview</h2>
    <p>
      Excel导入：<input type="file" name="excel" id="" @change="inputExcel" />
    </p>
    <p><button @click="printJs()">打印</button></p>
    <div id="excelDemo"></div>
  </div>
</template>

<script>
import * as XLSX from "xlsx";
export default {
  methods: {
    inputExcel(e) {
      var file = e.target.files[0];
      readWorkbookFromLocalFile(file, function (workbook) {
        readWorkbook(workbook);
      });
      function readWorkbookFromLocalFile(file, callback) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var data = e.target.result;
          var workbook = XLSX.read(data, {
            bookType: "xlsx", // 要生成的文件类型
            bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
            type: "binary",
          });
          if (callback) callback(workbook);
        };
        reader.readAsBinaryString(file);
      }
      function readWorkbook(workbook) {
        var sheetNames = workbook.SheetNames; // 工作表名称集合
        var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
        // var csv = XLSX.utils.sheet_to_csv(worksheet);
        // var json = XLSX.utils.sheet_to_json(worksheet);
        var ht = XLSX.utils.sheet_to_html(worksheet);

        document.getElementById("excelDemo").innerHTML = ht;
      }
    },
    printJs() {
      this.$print({
        printable: "excelDemo",
        type: "html",
        // scanStyles: false,
        // 继承原来的所有样式
        targetStyles: ["*"],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.excel_container > table {
  border: 1px solid red;
}
</style>
