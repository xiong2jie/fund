<template>
  <!-- 复利计算 -->
  <div class="compound-interest">
    <div>
      <img src="@/assets/image/fish.jpg" class="img-style" />
    </div>
    <div class="card-style">
      <el-row type="flex" justify="center">
        <el-col>
          <el-card class="box-card">
            <div slot="header" class="header-style">输入信息</div>
            <el-form
              :model="initDataForm"
              status-icon
              :rules="rules"
              ref="nameForm"
              label-width="1.5rem"
              class="demo-nameForm"
            >
              <el-form-item
                label="每月定投金额(元)"
                required
                prop="perMonthInvestment"
              >
                <el-input v-model="initDataForm.perMonthInvestment"></el-input>
              </el-form-item>
              <el-form-item
                label="定投时间 (年)"
                required
                prop="investmentTime"
              >
                <el-input
                  v-model.number="initDataForm.investmentTime"
                ></el-input>
              </el-form-item>
              <el-form-item label="年利率 (%)" required prop="interestRate">
                <el-input v-model="initDataForm.interestRate"></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" @click="submitForm('nameForm')"
              >计 算</el-button
            >
            <el-button @click="resetForm('nameForm')">重 置</el-button>
          </el-card>
        </el-col>
        <el-col>
          <el-card v-if="isCalculate">
            <div slot="header">得出结果</div>
            <el-form :model="finalDataForm" label-width="1rem">
              <el-form-item label="本金(元)" prop="principal">
                {{ finalDataForm.principal }}
              </el-form-item>
              <el-form-item label="本息(元)" prop="principalInterest">
                {{ finalDataForm.principalInterest }}
              </el-form-item>
              <el-form-item label="盈利(元)" prop="profit">
                {{ finalDataForm.profit }}
              </el-form-item>
              <el-form-item label="总利率 (%)" prop="totalInterestRate">
                {{ finalDataForm.totalInterestRate }}
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 每月定投金额 (数字、可以是小数)
    var checkInvestment = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("定投金额不能为空"));
      }
      setTimeout(() => {
        if (!Number(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0) {
            callback(new Error("必须大于0"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    // 定投时间 (年)
    var checkTime = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("定投时间不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0) {
            callback(new Error("必须大于0"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    // 年利率 (%)
    var checkRate = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年利率不能为空"));
      }
      setTimeout(() => {
        if (!Number(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0) {
            callback(new Error("必须大于0"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      initDataForm: {
        perMonthInvestment: 1000, // 定投金额
        investmentTime: 30, // 定投时间
        interestRate: 15, // 年利率
      },
      finalDataForm: {
        principal: "", // 本金
        principalInterest: "", // 本息
        profit: "", // 盈利
        totalInterestRate: "", // 总利率
      },
      isCalculate: false,
      rules: {
        perMonthInvestment: [{ validator: checkInvestment, trigger: "blur" }],
        investmentTime: [{ validator: checkTime, trigger: "blur" }],
        interestRate: [{ validator: checkRate, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 本金
    fnPrincipal() {
      let momey = this.initDataForm.perMonthInvestment;
      let time = this.initDataForm.investmentTime * 12;
      this.finalDataForm.principal = (momey * time).toFixed(2);
    },
    // 本息
    fnPrincipalInterest() {
      let total = 0;
      let momey = this.initDataForm.perMonthInvestment;
      let time = this.initDataForm.investmentTime * 12;
      let rate = this.initDataForm.interestRate / (100 * 12);
      while (time) {
        total += momey * Math.pow(1 + rate, time);
        time--;
      }
      this.finalDataForm.principalInterest = total.toFixed(2);
    },
    // 盈利
    fnProfit() {
      this.finalDataForm.profit = (
        this.finalDataForm.principalInterest - this.finalDataForm.principal
      ).toFixed(2);
    },
    // 总利息
    fnTotalInterestRate() {
      this.finalDataForm.totalInterestRate = (
        (100 * this.finalDataForm.profit) /
        this.finalDataForm.principal
      ).toFixed(2);
    },
    // 提交表单
    submitForm(nameForm) {
      this.$refs[nameForm].validate((valid) => {
        if (valid) {
          this.isCalculate = true;
          this.fnPrincipal();
          this.fnPrincipalInterest();
          this.fnProfit();
          this.fnTotalInterestRate();
        } else {
          return false;
        }
      });
    },
    // 重置表单
    resetForm(nameForm) {
      this.isCalculate = false;
      this.$refs[nameForm].resetFields();
    },
  },
};
</script>
