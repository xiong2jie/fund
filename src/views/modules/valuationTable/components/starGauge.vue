<template>
  <div id="myChart"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "starGauge",
  components: {},
  data() {
    return {
      setOption: {
        series: [
          {
            name:"星级",
            type: "gauge",
            min: 0, // 最小的数据值，映射到 minAngle。
            max: 5, // 最大的数据值，映射到 maxAngle。
            splitNumber: 5, // 仪表盘刻度的分割段数。
            // 仪表盘轴线相关配置。
            axisLine: {
              roundCap: true, // 是否在两端显示成圆形。
              // 仪表盘轴线样式。
              lineStyle: {
                width: 18, // 轴线宽度。
              },
            },
            // 仪表盘指针样式。
            itemStyle: {
              color: "#58D9F9", // 指针颜色，默认取数值所在的区间的颜色
              shadowColor: "rgba(0,138,255,0.45)", // 阴影颜色。支持的格式同color
              shadowBlur: 10, // 图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
              shadowOffsetX: 2, // 阴影水平方向上的偏移距离。
              shadowOffsetY: 2, // 阴影垂直方向上的偏移距离。
            },
            // 展示当前进度。
            progress: {
              show: true, // 是否显示进度条
              overlap: true, // 多组数据时进度条是否重叠。
              clip: true, // 是否裁掉超出部分
              roundCap: true, // 是否在两端显示成圆形。
              width: 18, // 进度条宽度
              itemStyle: {
                color: "#ff6167",
              },
            },
            // 分隔线样式。
            splitLine: {
              show: true, // 是否显示分隔线。
              distance: 10, // 分隔线与轴线的距离。
              length: 15, // 分隔线线长。支持相对半径的百分比。
              lineStyle: {
                color: "#000", // 线的颜色。
              },
            },
            // 刻度样式。
            axisTick: {
              show: true, // 是否显示刻度。
              distance: 10, // 刻度线与轴线的距离。
              length: 15, // 刻度线长。支持相对半径的百分比。
              lineStyle: {
                color: "#000", // 线的颜色。
                
              },
            },
            // 刻度标签。
            axisLabel: {
              show: true, // 是否显示标签。
              distance: -70, // 标签与刻度线的距离。
              fontSize: 15, // 文字字体的风格。
              color: "#000", // 文字的颜色。
            },
            // 表盘中指针的固定点。
            anchor: {
              show: false, // 是否显示固定点。
              size: 14, // 固定点大小。
              // 指针固定点样式。
              itemStyle: {
                color: "#000", // 图形的颜色。
                borderWidth: 2,
              },
            },
            // 仪表盘指针。
            pointer: {
              show: false,
              offsetCenter: [0, "10%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              icon:
                "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "80%", // 指针长度，可以是绝对数值，也可以是相对于半径的半分比。
              itemStyle: {
                // 指针样式
                color: "#000",
              },
            },
            // 仪表盘详情，用于显示数据。
            detail: {
              show: true, // 是否显示详情。
              offsetCenter: ["0", "-15%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              valueAnimation: true, // 是否开启标签的数字动画。
              fontSize: 40, // 文字的字体大小。
            },
            // 系列中的数据内容数组。数组项可以为单个数值。
            data: [
              {
                value: Number,
              },
            ],
          },
          {
            name:"指数",
            type: "gauge",
            min: 4583*(1+(this.$moment().quarter()+4*(this.$moment().year()-2021)-1)*0.025)*2, // 最小的数据值，映射到 minAngle。
            max: 4583*(1+(this.$moment().quarter()+4*(this.$moment().year()-2021)-1)*0.025), // 最大的数据值，映射到 maxAngle。
            splitNumber: 5, // 仪表盘刻度的分割段数。
            radius: "80%",
            // 仪表盘轴线相关配置。
            axisLine: {
              show: true,
              // 仪表盘轴线样式。
              lineStyle: {
                color: [[1, "#000"]],
                width: 1, // 轴线宽度。
              },
            },
            // 分隔线样式。
            splitLine: {
              show: true, // 是否显示分隔线。
              distance: -18, // 分隔线与轴线的距离。
              length: 18, // 分隔线线长。支持相对半径的百分比。
              lineStyle: {
                color: "#000", // 线的颜色。
              },
            },
            // 刻度样式。
            axisTick: {
              show: true, // 是否显示刻度。
              distance: -12, // 刻度线与轴线的距离。
              length: 10, // 刻度线长。支持相对半径的百分比。
              lineStyle: {
                color: "#000", // 线的颜色。
              },
            },
            // 刻度标签。
            axisLabel: {
              show: true, // 是否显示标签。
              distance: 60, // 标签与刻度线的距离。
              fontSize: 12, // 文字字体的风格。
              color: "#000", // 文字的颜色。
              formatter: (value) => {
                return Math.round(value)
              }
            },
            // 表盘中指针的固定点。
            anchor: {
              show: false, // 是否显示固定点。
              size: 20, // 固定点大小。
              // 指针固定点样式。
              itemStyle: {
                borderColor: "#000", // 图形的颜色。
                borderWidth: 2,
              },
            },
            // 仪表盘指针。
            pointer: {
              show: false,
            },
            // 仪表盘详情，用于显示数据。
            detail: {
              show: true, // 是否显示详情。
              offsetCenter: ["0", "20%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              valueAnimation: true, // 是否开启标签的数字动画。
              fontSize: 20, // 文字的字体大小。
            },
            // 系列中的数据内容数组。数组项可以为单个数值。
            data: [
              {
                value: Number,
              },
            ],
          },
        ],        
      },
    };
  },
  methods: {
    /* 根据中证全指指数确定指数星级 */
    calcStar() {
      let min = 4583*(1+(this.$moment().quarter()+4*(this.$moment().year()-2021)-1)*0.025);
      let max = 4583*(1+(this.$moment().quarter()+4*(this.$moment().year()-2021)-1)*0.025) * 2;
      let index = this.setOption.series[1].data[0].value;
      let star = this.setOption.series[0].data[0].value;
      if (index < min) {
        // 1.五星级以上
        star = 5;
      } else if (index >= min && index < min*1.2) {
        // 2.四-五星级
        star = 4 + (min*1.2 -index)/(min*0.2);
      } else if (index >= min* 1.2 && index < min*1.4) {
        // 3.三-四星级
        star = 3 + (min*1.4 -index)/(min*0.2);
      } else if (index >= min* 1.4 && index < min*1.6) {
        // 4.二-三星级
        star = 2 + (min*1.6 -index)/(min*0.2);
      } else if (index >= min* 1.6 && index < min*1.8) {
        // 5.一-二星级
        star = 1 + (min*1.8 -index)/(min*0.2);
      } else if (index >= min* 1.8 && index < max) {
        // 6.零-一星级
        star = 0 + (max -index)/(min*0.2);
      } else {
        // 7.零星级以下
        star = 0;
      }
      this.setOption.series[0].data[0].value = star.toFixed(1);
    },
    /* 进度条颜色渲染 */
    colorRendering() {
      if (this.setOption.series[0].data[0].value < 2) {
        this.setOption.series[0].progress.itemStyle.color = "#ff6167" ;
        this.setOption.series[0].detail.color = "#ff6167" ;
        this.setOption.series[1].detail.color = "#ff6167" ;
      } else if (this.setOption.series[0].data[0].value > 2 && this.setOption.series[0].data[0].value < 4) {
        this.setOption.series[0].progress.itemStyle.color = "#ffcb5d" ;
        this.setOption.series[0].detail.color = "#ffcb5d" ;
        this.setOption.series[1].detail.color = "#ffcb5d" ;
      } else {
        this.setOption.series[0].progress.itemStyle.color = "#19d6a0";
        this.setOption.series[0].detail.color = "#19d6a0" ;
        this.setOption.series[1].detail.color = "#19d6a0" ;
      }
    },
    /* 初始化 */
    init() {
      this.setOption.series[1].data[0].value = 5500;
      // 
      this.calcStar();
      // 颜色
      this.colorRendering();
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption(this.setOption);
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style></style>
