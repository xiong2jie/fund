<template>
  <!-- 顶栏 -->
  <header>
    <el-row type="flex" justify="space-around">
      <el-col>
        <!-- logo -->
        <div class="menu-logo">
          <a href="/">
            <img src="@/assets/logo.png" alt="logo" />
          </a>
        </div>
      </el-col>
      <el-col>
        <!-- 导航栏 -->
        <div class="menu-content">
          <el-menu
            :default-active="activeIndex"
            @select="handleSelect"
            class="el-menu-demo"
            router
            mode="horizontal"
            text-color="#ffffff"
            active-text-color="#ffffff"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/valuationTable">估值表</el-menu-item>
            <el-menu-item index="/compoundInterest">复利计算</el-menu-item>
            <el-menu-item index="/fixedInvestment">定投计算</el-menu-item>
            <el-menu-item index="/test">测试</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col>
        <!-- 个人信息 -->
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      activeIndex: "/",
    };
  },
  methods: {
    /* 点击导航栏 */
    handleSelect(key) {
      this.$emit("getRouterPath", key);
    },
  },
  created() {
    /* 刷新时，判断当前路由是不是home，如果是就不跳路由，如果否，就跳路由 */
    if (this.$route.path !== "/") {
      this.$router.push({path:'/'});
    }
  },
  mounted() {
  }
};
</script>
