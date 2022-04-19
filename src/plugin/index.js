/*
 * @Author: Blueth007
 * @Date: 2022-04-08 11:26:27
 * @LastEditTime: 2022-04-08 17:33:17
 * @Description:
 * MIT
 */

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, Options) {
    // 添加属性与方法
    //这里我写的$testProp等加了$符号的，表示他为vue全局的，但实际上不加也可以的，访问时也不加就行了
    // (Vue.prototype.$myoption = "我是来自插件的属性"),
    //   (Vue.prototype.$myfn = function () {
    //     console.log("我是来自插件的方法");
    //   });
    // 添加全局混入
    Vue.mixin({});
    // 添加全局过滤器
    Vue.filter("ellipsTexts", (text, num) => {
      if (text) {
        if (text.length > num) {
          return text.substring(0, num) + "...";
        } else {
          return text;
        }
      } else {
        return text;
      }
    });
    // 添加全局指令 只能输入数字 v-number-only
    Vue.directive("numberOnly", {
      bind(el) {
        el.handler = function () {
          el.value = el.value.replace(/\D+/, "");
        };
        el.addEventListener("input", el.handler);
      },
      unbind(el) {
        el.removeEventListener("input", el.handler);
      },
    });
    /* 防抖
     * 场景描述：部分按钮或者敏感操作短时间内被多次点击，就会向后台重复发起多条请求，导致数据错乱，比如新增按钮、支付按钮等。
     * 故需要短时间多次点击按钮，只触发一次事件回调，即常见的防抖。
     * 实现方案：监听 dom 元素的 click 事件，在捕获阶段进行防抖判断，如果短时间内多次点击则阻止冒泡。
     * <button v-debounce @click="dClick('b111')">dClick</button>
     */
    Vue.directive("debounce", {
      bind: (el, binding, node) => {
        const time = binding.arg || 500;
        el.time = time;
        el.pre;
        let timer;
        el.addEventListener(
          "click",
          (event) => {
            const fn = node.data.on.click;
            event && event.stopImmediatePropagation();
            timer && clearTimeout(timer);
            timer = setTimeout(() => fn(), time);
          },
          true
        );
      },
    });
    /*  节流 设置v-throttle自定义指令
     *  节流 每单位时间可触发一次
     *  第一次瞬间触发，最后一次不管是否达到间隔时间依然触发
     *  为button标签设置v-throttle自定义指令
     * <button @click="sayHello" v-throttle>提交</button>
     */
    Vue.directive("throttle", {
      bind: (el, binding, node) => {
        let time = binding.value || 2000; // 节流时间
        let timer, timer_end;
        el.addEventListener(
          "click",
          (event) => {
            const fn = node.data.on.click;
            event && event.stopImmediatePropagation();
            if (timer) {
              clearTimeout(timer_end);
              return (timer_end = setTimeout(() => fn(), time));
            }
            fn();
            timer = setTimeout(() => (timer = null), time);
          },
          true
        );
      },
    });
  },
};
