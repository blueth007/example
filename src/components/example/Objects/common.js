/*
 * @Author: Blueth007
 * @Date: 2022-03-03 14:56:32
 * @LastEdittimer: 2022-03-03 15:12:11
 * @Description:
 * MIT
 */
import timer from "./time";
/**
 * 行政案件权利义务告知书
询问笔录

 */
export class Ask {
  constructor(name, t1 = "", t2 = "", t3 = "") {
    this.name = name;
    this.notify = {
      name: "行政案件权利义务告知书",
      time: new timer(t1, t2, t3),
    };
    this.record = {
      name: "询问笔录",
      time: new timer(t1, t2, t3),
    };
  }
}

/**
 * 询问通知书
证人诉讼权利义务告知书
询问笔录

 */
export class AskCommon {
  constructor(name, t1 = "", t2 = "", t3 = "") {
    this.name = name;
    this.query = {
      name: "询问通知书",
      time: new timer(t1, t2, t3),
    };
    this.notify = {
      name: "证人诉讼权利义务告知书",
      time: new timer(t1, t2, t3),
    };
    this.record = {
      name: "询问笔录",
      time: new timer(t1, t2, t3),
    };
  }
}
//接收证据材料清单
export class ReceiveAsk extends AskCommon {
  constructor(name, t1 = "", t2 = "", t3 = "") {
    super(name, t1, t2, t3);
    this.lists = {
      name: "接受材料证据清单",
      time: new timer(t1, t2, t3),
    };
  }
}

//信息核查
export class InfosCheck extends AskCommon {
  constructor(name, t1 = "", t2 = "", t3 = "") {
    super(name, t1, t2, t3);
    this.infosCheck = {
      name: "信息核查",
      time: new timer(t1, t2, t3),
    };
  }
}
/**
 * 被害人诉讼权利义务告知书
第一次询问笔录
辨认笔录
第二次询问笔录
 */
export class QuestCommon {
  constructor(name, t1 = "", t2 = "", t3 = "") {
    this.name = name;
    this.victimNotify = {
      name: "被害人诉讼权利义务告知书",
      time: new timer(t1, t2, t3),
    };
    this.record = {
      name: "辨认笔录",
      time: new timer(t1, t2, t3),
    };
    this.firstRecord = {
      name: "第一次询问笔录",
      time: new timer(t1, t2, t3),
    };
    this.secondRecord = {
      name: "第二次询问笔录",
      time: new timer(t1, t2, t3),
    };
  }
}

//初步损伤鉴定意见
export class FirstDetermine extends QuestCommon {
  constructor(name, t1 = "", t2 = "", t3 = "") {
    super(name, t1, t2, t3);
    this.firstDetermine = {
      name: "初步损伤鉴定意见",
      time: new timer(t1, t2, t3),
    };
  }
}

/**
 * 拘留通知书

 */
export class Detention {
  constructor(name, t1 = "", t2 = "", t3 = "") {
    this.name = name;
    this.detentionNotify = {
      name: "拘留通知书",
      time: new timer(t1, t2, t3),
    };
  }
}
//调取证据通知书
export class Evidence {
  constructor(name, t1 = "", t2 = "", t3 = "") {
    this.name = name;
    this.detentionNotify = {
      name: "调取证据通知书",
      time: new timer(t1, t2, t3),
    };
  }
}

//
export class Total {
  constructor(name) {
    this.name = name;
    this.XCBRJL = { name: "现场辨认笔录", time: new timer() };
    this.ZDDBRJL = { name: "折叠刀辨认笔录", time: new timer() };
    this.CJJJ = { name: "处警经过", time: new timer() };
    this.SCBL = { name: "搜查笔录", time: new timer() };
    this.KYJDS = { name: "扣押决定书", time: new timer() };
    this.KYQD = { name: "扣押清单", time: new timer() };
    this.DZSJ = { name: "电子数据", time: new timer() };
    this.FZQLGZS = { name: "犯罪嫌疑人权利义务告知书", time: new timer() };
    this.CKGZS = { name: "嫌疑人认罪认罚从宽制度告知书", time: new timer() };
    this.firstAsk = { name: "第一次讯问笔录", time: new timer() };
    this.BRBL = { name: "辨认笔录", time: new timer() };
    this.secondAsk = { name: "第二次询问笔录", time: new timer() };
    this.infosCheck = { name: "信息核查", time: new timer() };
    this.pee = { name: "（尿检）现场检测报告书", time: new timer() };
    this.peeImg = { name: "尿检图片", time: new timer() };
  }
}
