export default[
  {
    path: "/styles/textandtypography",
    component: () => import(/* webpackChunkName: "style" */ '../views/styles/TextAndTypography.vue')
  },
  {
    path: "/styles/spacing",
    component: () => import(/* webpackChunkName: "style" */ '../views/styles/Spacing.vue')
  }
]
