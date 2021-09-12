/** 指数 */
const indexsRaw = {
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
      level: "",
      ration: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" }
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
      level: "",
      ration: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" }
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
      level: "",
      ration: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" }
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
      level: "",
      ration: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" }
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
      level: "",
      ration: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" }
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
      level: "",
      ration: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" }
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
      level: "",
      ration: "",
      boxStyle: { under: "", normal: "", over: "" },
      rangeStyle: { under: "", normal: "", over: "" }
    },
  ]
}

/** 判断指数当前所属区域 */
function indexsFuction() {
  let boxWidth = 3;
  const obj = indexsRaw;
  obj.PBV.forEach(element => {
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
      // 低估区域
      element.boxStyle.under =
        "backgroundColor: #cbf5e9; width: " + boxWidth + "rem";
      element.rangeStyle.under = "width: 0rem";
      // 正常区域
      element.boxStyle.normal = "backgroundColor: #ebf2fc";
      element.rangeStyle.normal = "width: 0rem";
      // 高估区域
      element.boxStyle.over = "backgroundColor: #ebf2fc";
      element.rangeStyle.over = "width: 0rem";

    } else if (
      element.appraisement >= element.lowValue &&
      element.appraisement < element.underValue
    ) {
      /** 2.低估区域样式 */
      // 低估区域
      element.boxStyle.under = "backgroundColor: #cbf5e9";
      element.rangeStyle.under =
        "backgroundColor: #19d6a0; width:" + underRation + "rem";
      // 正常区域
      element.boxStyle.normal = "backgroundColor: #ebf2fc";
      element.rangeStyle.normal = "width: 0rem";
      // 高估区域
      element.boxStyle.over = "backgroundColor: #ebf2fc";
      element.rangeStyle.over = "width: 0rem";

    } else if (
      element.appraisement >= element.underValue &&
      element.appraisement < element.overValue
    ) {
      /** 3.正常区域样式 */
      // 低估区域
      element.boxStyle.under = "backgroundColor: #fff2df";
      element.rangeStyle.under =
        "backgroundColor: #ffcb5d; width: " + boxWidth + "rem";
      // 正常区域
      element.boxStyle.normal = "backgroundColor: #fff2df";
      element.rangeStyle.normal =
        "backgroundColor: #ffcb5d; width:" + normalRation + "rem";
      // 高估区域
      element.boxStyle.over = "backgroundColor: #ebf2fc";
      element.rangeStyle.over = "width: 0rem";

    } else if (
      element.appraisement >= element.overValue &&
      element.appraisement < element.highValue
    ) {
      /** 4.高估区域样式 */
      // 低估区域
      element.boxStyle.under = "backgroundColor: #ffddde";
      element.rangeStyle.under =
        "backgroundColor: #ff6167; width: " + boxWidth + "rem";
      // 正常区域
      element.boxStyle.normal = "backgroundColor: #ffddde";
      element.rangeStyle.normal =
        "backgroundColor: #ff6167; width:" + boxWidth + "rem";
      // 高估区域
      element.boxStyle.over = "backgroundColor: #ffddde";
      element.rangeStyle.over =
        "backgroundColor: #ff6167; width:" + overRation + "rem";

    } else {
      /** 5.高于历史区域样式 */
      // 低估区域
      element.boxStyle.under = "backgroundColor: #ffddde";
      element.rangeStyle.under =
        "backgroundColor: #ff6167; width: " + boxWidth + "rem";
      // 正常区域
      element.boxStyle.normal = "backgroundColor: #ffddde";
      element.rangeStyle.normal =
        "backgroundColor: #ff6167; width:" + boxWidth + "rem";
      // 高估区域
      element.boxStyle.over = "backgroundColor: #ffddde";
      element.rangeStyle.over =
        "backgroundColor: #ff6167; width:" + boxWidth + "rem";

    }
    element.boxStyle
  });
  return obj;
}

export const indexsRipe = indexsFuction()