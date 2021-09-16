/** 指数 */
const indexsRaw = {
  /** 市盈率 */
  PE: [
    {
      name: "名称：中概互联(市销率)",
      index: "指数：H30533",
      ROE: "",
      lowValue: 4.2,
      underValue: 5.6,
      overValue: 8,
      highValue: 12.8,
      appraisement: 8.0,
      on: "场内：513050",
      over: "场外：006327",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：A股龙头",
      index: "指数：HSCAIT",
      ROE: "",
      lowValue: 8,
      underValue: 11,
      overValue: 13,
      highValue: 15,
      appraisement: 10.07,
      on: "场内：",
      over: "场外：540012",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },

  ],
  /** 市净率 */
  PBV: [
    {
      name: "名称：地产行业",
      index: "指数：399393",
      ROE: "",
      lowValue: 1.3,
      underValue: 1.6,
      overValue: 2.2,
      highValue: 4,
      appraisement: 1.12,
      on: "场内：512200",
      over: "场外：160218",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：基建行业",
      index: "指数：399995",
      ROE: "",
      lowValue: 0.92,
      underValue: 1.1,
      overValue: 1.8,
      highValue: 3.6,
      appraisement: 1.05,
      on: "场内：",
      over: "场外：005223",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：银行行业",
      index: "指数：399986",
      ROE: "",
      lowValue: 0.75,
      underValue: 0.9,
      overValue: 1.15,
      highValue: 1.4,
      appraisement: 0.79,
      on: "场内：512800",
      over: "场外：001594",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：建筑材料",
      index: "指数：931009",
      ROE: "",
      lowValue: 1.4,
      underValue: 1.8,
      overValue: 2.1,
      highValue: 3.1,
      appraisement: 1.75,
      on: "场内：",
      over: "场外：004856",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：证券行业",
      index: "指数：399975",
      ROE: "",
      lowValue: 1.05,
      underValue: 1.6,
      overValue: 2.2,
      highValue: 4.8,
      appraisement: 1.63,
      on: "场内：512000",
      over: "场外：004069",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：军工行业",
      index: "指数：399967",
      ROE: "",
      lowValue: 2.1,
      underValue: 2.6,
      overValue: 4,
      highValue: 9.2,
      appraisement: 4.32,
      on: "场内：512680",
      over: "场外：161024",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：环保行业",
      index: "指数：000827",
      ROE: "",
      lowValue: 1.82,
      underValue: 2.3,
      overValue: 3,
      highValue: 5.9,
      appraisement: 4.52,
      on: "场内：512580",
      over: "场外：001064",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
  ],
  /** 海外市场 */
  OM: [
    {
      name: "名称：全球医疗",
      index: "指数：SPG120035",
      ROE: "",
      lowValue: 15,
      underValue: 21,
      overValue: 30,
      highValue: 45,
      appraisement: 29.02,
      on: "场内：",
      over: "场外：000369",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：美股消费",
      index: "指数：IXY",
      ROE: "",
      lowValue: 15,
      underValue: 21,
      overValue: 30,
      highValue: 45,
      appraisement: 36.19,
      on: "场内：162415",
      over: "场外：162415",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：标普科技",
      index: "指数：SSINFT",
      ROE: "",
      lowValue: 15,
      underValue: 21,
      overValue: 30,
      highValue: 90,
      appraisement: 31.52,
      on: "场内：161128",
      over: "场外：161128",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：纳斯达克100",
      index: "指数：NDX",
      ROE: "",
      lowValue: 15,
      underValue: 20,
      overValue: 30,
      highValue: 85,
      appraisement: 31.09,
      on: "场内：513100",
      over: "场外：513100",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
    {
      name: "名称：标普500",
      index: "指数：SPX",
      ROE: "",
      lowValue: 5.8,
      underValue: 15,
      overValue: 25,
      highValue: 44,
      appraisement: 25.52,
      on: "场内：513500",
      over: "场外：050025",
      singleRation: "",
      totalRation: "",
      downRation: "",
      upRation: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" },
      downStyle: "",
      upStyle: ""
    },
  ]
}

/** 判断指数当前所属区域 */
function indexsFuction() {
  let boxWidth = 3;
  const obj = indexsRaw;
  Object.keys(obj).forEach(key => {
    obj[key].forEach(element => {
      // 低估区域长度
      let underRation =
        (boxWidth * (element.appraisement - element.lowValue)) /
        (element.underValue - element.lowValue);
      // 正常区域长度
      let normalRation =
        (boxWidth * (element.appraisement - element.underValue)) /
        (element.overValue - element.underValue);
      // 高估区域长度
      let overRation =
        (boxWidth * (element.appraisement - element.overValue)) /
        (element.highValue - element.overValue);
      if (element.appraisement < element.lowValue) {
        /** 1.低于历史区域样式 */
        // 1)低估区域
        //a.距离估值上涨或者下跌
        element.downRation = "低于历史";
        element.downStyle = "color: red; font-weight: bold"
        element.upRation = Number((element.underValue - element.appraisement) /
          (element.appraisement) * 100).toFixed(2) + "%";
        //b.区域百分比和历史百分比
        element.singleRation = Number((element.appraisement - element.lowValue) /
          (element.underValue - element.lowValue) * 100).toFixed(2) + "%";
        element.totalRation = Number((element.appraisement - element.lowValue) /
          (element.highValue - element.lowValue) * 100).toFixed(2) + "%";
        //c.盒子颜色
        element.boxStyle.under =
          "backgroundColor: #cbf5e9; width: " + boxWidth + "rem";
        element.rangeStyle.under = "width: 0rem";
        // 2)正常区域
        element.boxStyle.normal = "backgroundColor: #ebf2fc";
        element.rangeStyle.normal = "width: 0rem";
        // 3)高估区域
        element.boxStyle.over = "backgroundColor: #ebf2fc";
        element.rangeStyle.over = "width: 0rem";

      } else if (
        element.appraisement >= element.lowValue &&
        element.appraisement < element.underValue
      ) {
        /** 2.低估区域样式 */
        // 1)低估区域
        //a.距离估值上涨或者下跌
        element.downRation = Number((element.lowValue - element.appraisement) /
          (element.appraisement) * 100).toFixed(2) + "%";
        element.upRation = Number((element.underValue - element.appraisement) /
          (element.appraisement) * 100).toFixed(2) + "%";
        //b.区域百分比和历史百分比
        element.singleRation = Number((element.appraisement - element.lowValue) /
          (element.underValue - element.lowValue) * 100).toFixed(2) + "%";
        element.totalRation = Number((element.appraisement - element.lowValue) /
          (element.highValue - element.lowValue) * 100).toFixed(2) + "%";
        //c.盒子颜色
        element.boxStyle.under = "backgroundColor: #cbf5e9";
        element.rangeStyle.under =
          "backgroundColor: #19d6a0; width:" + underRation + "rem";
        // 2)正常区域
        element.boxStyle.normal = "backgroundColor: #ebf2fc";
        element.rangeStyle.normal = "width: 0rem";
        // 3)高估区域
        element.boxStyle.over = "backgroundColor: #ebf2fc";
        element.rangeStyle.over = "width: 0rem";

      } else if (
        element.appraisement >= element.underValue &&
        element.appraisement < element.overValue
      ) {
        /** 3.正常区域样式 */
        // 1)低估区域
        element.boxStyle.under = "backgroundColor: #fff2df";
        element.rangeStyle.under =
          "backgroundColor: #ffcb5d; width: " + boxWidth + "rem";
        // 2)正常区域
        //a.距离估值上涨或者下跌
        element.downRation = Number((element.underValue - element.appraisement) /
          (element.appraisement) * 100).toFixed(2) + "%";
        element.upRation = Number((element.overValue - element.appraisement) /
          (element.appraisement) * 100).toFixed(2) + "%";
        //b.区域百分比和历史百分比
        element.singleRation = Number((element.appraisement - element.underValue) /
          (element.overValue - element.underValue) * 100).toFixed(2) + "%";
        element.totalRation = Number((element.appraisement - element.lowValue) /
          (element.highValue - element.lowValue) * 100).toFixed(2) + "%";
        //c.盒子颜色   
        element.boxStyle.normal = "backgroundColor: #fff2df";
        element.rangeStyle.normal =
          "backgroundColor: #ffcb5d; width:" + normalRation + "rem";
        // 3)高估区域
        element.boxStyle.over = "backgroundColor: #ebf2fc";
        element.rangeStyle.over = "width: 0rem";

      } else if (
        element.appraisement >= element.overValue &&
        element.appraisement <= element.highValue
      ) {
        /** 4.高估区域样式 */
        // 1)低估区域
        element.boxStyle.under = "backgroundColor: #ffddde";
        element.rangeStyle.under =
          "backgroundColor: #ff6167; width: " + boxWidth + "rem";
        // 2)正常区域
        element.boxStyle.normal = "backgroundColor: #ffddde";
        element.rangeStyle.normal =
          "backgroundColor: #ff6167; width:" + boxWidth + "rem";
        // 3)高估区域
        //a.距离估值上涨或者下跌
        element.downRation = Number((element.overValue - element.appraisement) /
          (element.appraisement) * 100).toFixed(2) + "%";
        element.upRation = Number((element.highValue - element.appraisement) /
          (element.appraisement) * 100).toFixed(2) + "%";
        //b.区域百分比和历史百分比
        element.singleRation = Number((element.appraisement - element.overValue) /
          (element.highValue - element.overValue) * 100).toFixed(2) + "%";
        element.totalRation = Number((element.appraisement - element.lowValue) /
          (element.highValue - element.lowValue) * 100).toFixed(2) + "%";
        //c.盒子颜色
        element.boxStyle.over = "backgroundColor: #ffddde";
        element.rangeStyle.over =
          "backgroundColor: #ff6167; width:" + overRation + "rem";

      } else {
        /** 5.高于历史区域样式 */
        // 1)低估区域
        element.boxStyle.under = "backgroundColor: #ffddde";
        element.rangeStyle.under =
          "backgroundColor: #ff6167; width: " + boxWidth + "rem";
        // 2)正常区域
        element.boxStyle.normal = "backgroundColor: #ffddde";
        element.rangeStyle.normal =
          "backgroundColor: #ff6167; width:" + boxWidth + "rem";
        // 3)高估区域
        //a.距离估值上涨或者下跌
        element.downRation = Number((element.overValue - element.appraisement) /
          (element.appraisement) * 100).toFixed(2) + "%";
        element.upRation = "高于历史";
        //b.区域百分比和历史百分比
        element.singleRation = Number((element.appraisement - element.overValue) /
          (element.highValue - element.overValue) * 100).toFixed(2) + "%";
        element.totalRation = Number((element.appraisement - element.lowValue) /
          (element.highValue - element.lowValue) * 100).toFixed(2) + "%";
        //c.盒子颜色
        element.boxStyle.over = "backgroundColor: #ffddde";
        element.rangeStyle.over =
          "backgroundColor: #ff6167; width:" + boxWidth + "rem";

      }

    })
  })

  return obj;
}

export const indexsRipe = indexsFuction()