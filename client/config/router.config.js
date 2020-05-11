export default [
 // 路由配置--by Sansui
  {
    path: '/',
    component: '../layouts/HomeLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { 
        path: '/', 
        name:'首页',
        component: './Home'
      },
      { 
        // meetup页面
        path: '/meetup', 
        name: 'meetup',
        component: './Meetup'
      },
      { 
        // 数据治理
        path: '/DataBase', 
        name: '数据治理',
        component: './DataBase'
      },
      { 
        // 客户联合解决方案
        path: '/customerSolution', 
        name: '客户联合解决方案',
        component: './CustomerSolution'
      },
      { 
        // 技术实验室
        path: '/labs', 
        name: '技术实验室',
        component: './Labs'
      },
      { 
        // 关于
        path: '/about', 
        name: '关于',
        component: './About'
      },
      {
        component: '404',
      },
    ],
  },
];
