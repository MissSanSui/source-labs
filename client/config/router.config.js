export default [
 // 路由配置--by Sansui
  {
    path: '/',
    component: '../layouts/HomeLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { 
        path: '/', 
        component: './Home'
      },
      { 
        // meetup页面
        path: '/meetup', 
        name: 'meetup',
        component: './Meetup'
      },
      {
        component: '404',
      },
    ],
  },
];
