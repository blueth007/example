/*
 * @Author: Blueth007
 * @Date: 2022-03-03 16:06:12
 * @LastEditTime: 2022-03-04 09:53:27
 * @Description:
 * MIT
 */
/**
 *  
询问通知书	InquiryNotice
接收证据材料清单	ReceivedLists
证人诉讼权利义务告知书	WitnessNotice
询问笔录	InquiryTranscript
拘留通知书	DetentionNotice
行政案件权利义务告知书	NoticeOfObligations
辨认笔录	identificationRecord
调取证据通知书	evidenceNotice
初步损伤鉴定意见	PreliminaryIdentificationA
被害人诉讼权利义务告知书	NoticeOfVictim
第一次询问笔录	firsInquiry
第二次询问笔录	secondInquiry
信息核查	InformationCheck
现场辨认笔录	OnSiteIdentificationRecord
折叠刀辨认笔录	FoldingKnife
处警经过	policePass
搜查笔录	searchTranscript
扣押决定书	SeizureDecision
扣押清单	SeizureList
电子数据	digitalData
犯罪嫌疑人权利义务告知书	suspectsNotice
嫌疑人认罪认罚从宽制度告知书	SuspectGuiltyNotice
第一次讯问笔录	firstInterrogation
（尿检）现场检测报告书	urineTestReport
尿检图片	urineTestPictures

 */

import timer from "./time";

//询问通知书
export class InquiryNotice {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "询问通知书";
    this.time = new timer(t1, t2, t3);
  }
}
//接收证据材料清单
export class ReceivedLists {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "接收证据材料清单";
    this.time = new timer(t1, t2, t3);
  }
}
//证人诉讼权利义务告知书
export class WitnessNotice {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "证人诉讼权利义务告知书";
    this.time = new timer(t1, t2, t3);
  }
}
//询问笔录
export class InquiryTranscript {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "询问笔录";
    this.time = new timer(t1, t2, t3);
  }
}
//拘留通知书
export class DetentionNotice {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "拘留通知书";
    this.time = new timer(t1, t2, t3);
  }
}
//行政案件权利义务告知书
export class NoticeOfObligations {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "行政案件权利义务告知书";
    this.time = new timer(t1, t2, t3);
  }
}
//辨认笔录
export class identificationRecord {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "辨认笔录";
    this.time = new timer(t1, t2, t3);
  }
}
//调取证据通知书
export class evidenceNotice {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "调取证据通知书";
    this.time = new timer(t1, t2, t3);
  }
}
//初步损伤鉴定意见
export class PreliminaryIdentificationA {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "初步损伤鉴定意见";
    this.time = new timer(t1, t2, t3);
  }
}
//被害人诉讼权利义务告知书
export class NoticeOfVictim {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "被害人诉讼权利义务告知书";
    this.time = new timer(t1, t2, t3);
  }
}
//第一次询问笔录
export class firsInquiry {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "第一次询问笔录";
    this.time = new timer(t1, t2, t3);
  }
}
//第二次询问笔录
export class secondInquiry {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "第二次询问笔录";
    this.time = new timer(t1, t2, t3);
  }
}
//信息核查
export class InformationCheck {
  constructor(t1 = "信息核查", t2 = "", t3 = "") {
    this.text = "";
    this.time = new timer(t1, t2, t3);
  }
}
//现场辨认笔录
export class OnSiteIdentificationRecord {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "现场辨认笔录";
    this.time = new timer(t1, t2, t3);
  }
}
//折叠刀辨认笔录
export class FoldingKnife {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "折叠刀辨认笔录";
    this.time = new timer(t1, t2, t3);
  }
}
//处警经过
export class policePass {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "处警经过";
    this.time = new timer(t1, t2, t3);
  }
}
//搜查笔录
export class searchTranscript {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "搜查笔录";
    this.time = new timer(t1, t2, t3);
  }
}
//扣押决定书
export class SeizureDecision {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "扣押决定书";
    this.time = new timer(t1, t2, t3);
  }
}
//扣押清单
export class SeizureList {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "扣押清单";
    this.time = new timer(t1, t2, t3);
  }
}
//电子数据
export class digitalData {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "电子数据";
    this.time = new timer(t1, t2, t3);
  }
}
//犯罪嫌疑人权利义务告知书
export class suspectsNotice {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "犯罪嫌疑人权利义务告知书";
    this.time = new timer(t1, t2, t3);
  }
}
//嫌疑人认罪认罚从宽制度告知书
export class SuspectGuiltyNotice {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "嫌疑人认罪认罚从宽制度告知书";
    this.time = new timer(t1, t2, t3);
  }
}
//第一次讯问笔录
export class firstInterrogation {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "第一次讯问笔录";
    this.time = new timer(t1, t2, t3);
  }
}
//（尿检）现场检测报告书
export class urineTestReport {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "（尿检）现场检测报告书";
    this.time = new timer(t1, t2, t3);
  }
}
//尿检图片
export class urineTestPictures {
  constructor(t1 = "", t2 = "", t3 = "") {
    this.text = "尿检图片";
    this.time = new timer(t1, t2, t3);
  }
}

window.a = {
  name: "张三",
  text: [new InquiryNotice(), new ReceivedLists(), new WitnessNotice()],
};
const data = [
  {
    name: "张三1",
    text: [new InquiryNotice(), new ReceivedLists(), new WitnessNotice(), new InquiryTranscript()],
  },
  {
    name: "张三2",
    text: [new InquiryNotice(), new ReceivedLists(), new WitnessNotice(), new InquiryTranscript()],
  },
  {
    name: "张三3",
    text: [new InquiryNotice(), new DetentionNotice(), new WitnessNotice(), new InquiryTranscript()],
  },
  {
    name: "张三4",
    text: [new NoticeOfObligations(), new InquiryTranscript()],
  },
  {
    name: "张三5",
    text: [new NoticeOfObligations(), new InquiryTranscript()],
  },
  {
    name: "张三6",
    text: [new NoticeOfObligations(), new InquiryTranscript()],
  },
  {
    name: "张三7",
    text: [new NoticeOfObligations(), new InquiryTranscript(), new identificationRecord(), new evidenceNotice()],
  },
  {
    name: "张三8",
    text: [new NoticeOfObligations(), new InquiryTranscript()],
  },
  {
    name: "张三9",
    text: [new PreliminaryIdentificationA(), new NoticeOfVictim(), new firsInquiry(), new identificationRecord(), new secondInquiry()],
  },
  {
    name: "张三10",
    text: [new NoticeOfVictim(), new firsInquiry(), new identificationRecord(), new secondInquiry()],
  },
];

export { data };
