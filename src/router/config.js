
let router = {
  menus: [
    {
      path: '/app/user',
      meta: { title: '用户' },
      hidden: false,
      children: [
        {
          path: '/app/user/store',
          component: 'Store',
          meta: { title: '我的店铺',  hiddenAside: true }
        },
        {
          path: '/app/user/oneselfCenter',
          component: 'OneselfCenter',
          meta: { title: '个人中心',  hiddenAside: true }
        }
      ]
    },
    {
      path: '/app/data',
      meta: { title: '数据中心' },
      children: [
        {
          path: '/app/data/info',
          component: 'DataInfo',
          meta: { title: '概述' }
        },
        {
          path: '/app/data/share',
          component: 'Share',
          meta: { title: '分享' }
        }
      ]
    }
  ]
}

export default router