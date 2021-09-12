<template>
  <!--布局-->
  <div class="layout-container">
    <el-container>
      <!-- 头部 -->
      <el-header><app-header @getRouterPath="getRouterPath"></app-header></el-header>
      <!-- 内容 -->
      <el-main><router-view></router-view></el-main>
      <!-- 底部 -->
      <el-footer v-if="routerPath !== '/'"><app-footer></app-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
export default {
  name: "Layout",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      routerPath: "/",
    };
  },
  methods: {
    /* 获取路由信息传到AppHeader组件中 */
    getRouterPath(routerPath) {
      this.routerPath = routerPath;
    },
  },
  created() {},
};
</script>
