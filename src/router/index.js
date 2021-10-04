import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import("@/views/layout"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/modules/home")
      },
      {
        path: "valuationTable",
        name: "ValuationTable",
        component: () => import("@/views/modules/valuationTable")
      },
      {
        path: "compoundInterest",
        name: "CompoundInterest",
        component: () => import("@/views/modules/compoundInterest")
      },
      {
        path: "fixedInvestment",
        name: "FixedInvestment",
        component: () => import("@/views/modules/fixedInvestment")
      },
      {
        path: "test",
        name: "test",
        component: () => import("@/views/modules/test")
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
