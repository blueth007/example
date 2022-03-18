/*
 * @Author: Blueth007
 * @Date: 2022-03-14 14:37:44
 * @LastEditTime: 2022-03-14 14:38:25
 * @Description:
 * MIT
 */

// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello();
  },
  methods: {
    hello: function () {
      console.log("hello from mixin!");
    },
  },
};

export default myMixin