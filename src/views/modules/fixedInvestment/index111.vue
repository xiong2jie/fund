<template>
  <!-- 定投计算 -->
  <div class="fixed-investment">
    <el-card>
      <div>
        在2021年一季度，4星级对应中证全指的点数，大约是5500点，每季度上涨大约2%-2.5%。二季度结束了，4星级对应中证全指的点数，大约是5610-5640点。
      </div>
      <div slot="header" class="slot-header">
        <el-form :model="investmentForm" label-width="3rem">
          <div>定投计算</div>
          <!-- -->
          <el-row type="flex" justify="center">
            <el-col>
              <el-form-item label="投资金额(元)：" prop="money">
                <el-input
                  v-model="investmentForm.money"
                  @change="changeRate"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="星 级：" prop="starValue">
                <el-rate
                  v-model="investmentForm.starValue"
                  @change="changeRate"
                  show-score
                  allow-half
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="primary-body">
        <!-- 现金宝 -->
        <el-card>
          <div slot="header" class="slot-header">
            <span>现金宝</span>
            <el-form :model="cashTreasureForm" label-width="1.5rem">
              <el-row type="flex" justify="center">
                <el-col>
                  <el-form-item label="占 比：" prop="rate">{{
                    cashTreasureForm.rate
                  }}</el-form-item>
                </el-col>
                <el-col>
                  <el-form-item
                    label="月投金额（元）："
                    prop="monthlyInvestment"
                    >{{ cashTreasureForm.monthlyInvestment }}</el-form-item
                  >
                </el-col>
                <el-col>
                  <el-tooltip
                    content="一年投资金额的钱+两个月保底投资的钱+每个月存留钱"
                    placement="top"
                  >
                    <el-form-item label="结余（元）：" prop="cashSurplus"
                      >{{ cashTreasureForm.cashSurplus }} +
                      {{ cashTreasureForm.minimumGuarantee }} +
                      {{ cashTreasureForm.monthlyInvestment }}
                    </el-form-item>
                  </el-tooltip>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="secondary-body">
            <el-row type="flex" justify="center">
              <el-col>
                <!-- 螺丝钉指数组合 -->
                <el-form :model="activefundsForm" label-width="1rem">
                  <el-card>
                    <div slot="header">
                      <span>螺丝钉指数组合</span>
                      <el-row type="flex" justify="center">
                        <el-col>
                          <el-form-item label="占 比：" prop="rate">
                            {{ activefundsForm.rate }}
                          </el-form-item>
                        </el-col>
                        <el-col>
                          <el-form-item
                            label="月投金额(元)"
                            prop="monthlyInvestment"
                          >
                            {{ activefundsForm.monthlyInvestment }}
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </div>
                    <div>
                      <el-form-item label="定投金额(元)" prop="fixedInvestment">
                        {{ activefundsForm.fixedInvestment }}
                      </el-form-item>
                      <el-form-item label="定投时间" prop="time">
                        {{ activefundsForm.time }}
                      </el-form-item>
                    </div>
                  </el-card>
                </el-form>
              </el-col>
              <el-col>
                <!-- 螺丝钉主动优选 -->
                <el-form :model="indexFundsForm" label-width="1rem">
                  <el-card>
                    <div slot="header" class="slot-header">
                      <span>螺丝钉主动优选</span>
                      <el-row type="flex" justify="center">
                        <el-col>
                          <el-tooltip
                            content="一年投资金额的钱"
                            placement="top"
                          >
                            <el-form-item label="占 比：" prop="rate">
                              {{ indexFundsForm.cashSurplusrate }}
                            </el-form-item>
                          </el-tooltip>
                        </el-col>
                        <el-col>
                          <el-form-item
                            label="月投金额(元)"
                            prop="monthlyInvestment"
                          >
                            {{ indexFundsForm.cashSurplusMonthlyInvestment }}
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </div>
                    <div>
                      <el-form-item label="定投金额(元)" prop="fixedInvestment">
                        {{ indexFundsForm.cashSurplusFixedInvestment }}
                      </el-form-item>
                      <el-form-item label="定投时间" prop="time">
                        {{ indexFundsForm.time }}
                      </el-form-item>
                    </div>
                  </el-card>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      // 投资
      investmentForm: {
        money: "1000",
        starValue: 4,
      },
      // 现金宝
      cashTreasureForm: {
        rate: "40%",
        monthlyInvestment: "400",
        cashSurplus: "12000",
        minimumGuarantee: "2000",
      },
      // 螺丝钉指数组合
      activefundsForm: {
        rate: "60%",
        monthlyInvestment: "600",
        fixedInvestment: "150",
        time: "星期二",
      },
      // 螺丝钉主动优选
      indexFundsForm: {
        cashSurplusrate: "30%",
        monthlyInvestment: "400",
        cashSurplusMonthlyInvestment: "3600",
        fixedInvestment: "100",
        cashSurplusFixedInvestment: "900",
        time: "星期二",
      },
    };
  },
  methods: {
    changeRate() {
      let starValue = this.investmentForm.starValue;
      /**
       * 1.四星以下:   现金宝(40%) + 螺丝钉指数组合(60%) + 螺丝钉主动优选(0%)
       * 2.四星:      现金宝(0%) + 螺丝钉指数组合(60%) + 螺丝钉主动优选(40%)
       * 3.四星半:    现金宝(0%) + 螺丝钉指数组合(60%) + 螺丝钉主动优选(40%)
       * 4.五星:      现金宝(0%) + 螺丝钉指数组合(60%) + 螺丝钉主动优选(40%)
       */
      if (starValue < 4) {
        /* 四星以下 */
        // 现金宝
        this.cashTreasureForm.cashSurplus = 12 * this.investmentForm.money;
        this.cashTreasureForm.monthlyInvestment =
          0.4 * this.investmentForm.money;
        // 螺丝钉指数组合
        this.activefundsForm.monthlyInvestment =
          0.6 * this.investmentForm.money;
        this.activefundsForm.fixedInvestment =
          this.activefundsForm.monthlyInvestment / 4;
        // 螺丝钉主动优选
        this.indexFundsForm.cashSurplusrate = "0%";
        this.indexFundsForm.cashSurplusMonthlyInvestment = "0";
        this.indexFundsForm.cashSurplusFixedInvestment = "0";
        this.indexFundsForm.time = "不定投";
      } else if (starValue == 4) {
        /* 四星 */
        // 现金宝
        this.cashTreasureForm.cashSurplus = 12 * this.investmentForm.money;
        // 螺丝钉指数组合
        this.activefundsForm.monthlyInvestment =
          0.6 * this.investmentForm.money;
        this.activefundsForm.fixedInvestment =
          this.activefundsForm.monthlyInvestment / 4;
        // 螺丝钉主动优选
        this.indexFundsForm.cashSurplusrate = "30%";
        this.indexFundsForm.cashSurplusMonthlyInvestment =
          0.3 * this.cashTreasureForm.cashSurplus;
        this.indexFundsForm.cashSurplusFixedInvestment =
          this.indexFundsForm.cashSurplusMonthlyInvestment / 4;
        this.indexFundsForm.time = "星期二";
      } else if (starValue == 4.5) {
        /* 四星半 */
        // 现金宝
        this.cashTreasureForm.cashSurplus = 12 * this.investmentForm.money;
        // 螺丝钉指数组合
        this.activefundsForm.monthlyInvestment =
          0.6 * this.investmentForm.money;
        this.activefundsForm.fixedInvestment =
          this.activefundsForm.monthlyInvestment / 4;
        // 螺丝钉主动优选
        this.indexFundsForm.cashSurplusrate = "50%";
        this.indexFundsForm.cashSurplusMonthlyInvestment =
          0.5 * this.cashTreasureForm.cashSurplus;
        this.indexFundsForm.cashSurplusFixedInvestment =
          this.indexFundsForm.cashSurplusMonthlyInvestment / 4;
        this.indexFundsForm.time = "星期二";
      } else if (starValue == 5) {
        /* 五星 */
        // 现金宝
        this.cashTreasureForm.cashSurplus = 12 * this.investmentForm.money;
        // 螺丝钉指数组合
        this.activefundsForm.monthlyInvestment =
          0.6 * this.investmentForm.money;
        this.activefundsForm.fixedInvestment =
          this.activefundsForm.monthlyInvestment / 4;
        // 螺丝钉主动优选
        this.indexFundsForm.cashSurplusrate = "80%";
        this.indexFundsForm.cashSurplusMonthlyInvestment =
          0.8 * this.cashTreasureForm.cashSurplus;
        this.indexFundsForm.cashSurplusFixedInvestment =
          this.indexFundsForm.cashSurplusMonthlyInvestment / 4;
        this.indexFundsForm.time = "星期二";
        // 螺丝钉主动优选
      }
    },
  },
};
</script>
