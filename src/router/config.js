
let router = {
  menus: [
    {
      path: '/app/user',
      meta: { title: '用户' },
      children: [
        {
          path: '/app/user/store',
          component: 'Store',
          meta: { title: '我的店铺' }
        },
        {
          path: '/app/user/oneselfCenter',
          component: 'OneselfCenter',
          meta: { title: '个人中心' }
        }
      ]
    }
  ]
}

export default router