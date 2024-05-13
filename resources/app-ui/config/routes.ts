/**
  * @name umi routing configuration for
  * @description routing configuration for
  * @param path path only supports two placeholder configurations, the first is in the form of dynamic parameter :id, and the second is * wildcard, which can only appear at the end of the routing string.
  * @param component configures the React component path used for rendering after location and path match. It can be an absolute path or a relative path. If it is a relative path, it will be searched starting from src/pages.
  * @param routes Configure sub-routes, usually used when you need to add layout components to multiple paths.
  * @param redirect configure route jump
  * @param wrappers Configure the packaging component of the routing component. Through the packaging component, you can combine more functions into the current routing component. For example, it can be used for routing-level permission verification.
  * @param name Configure the title of the route. By default, the value of menu.xxxx in the internationalization file menu.ts is read. If the name is configured as login, the value of menu.login in menu.ts is read as the title.
  * @param icon Configure the icon of the route. For the value, please refer to https://ant.design/components/icon-cn. Pay attention to removing the style suffix and capitalization. If you want to configure the icon as <StepBackwardOutlined />, the value should be stepBackward. or StepBackward, if you want to configure the icon as <UserOutlined />, the value should be user or User
  * @doc https://umijs.org/docs/guides/routes
  */

export default [



  /**** Start - Admin App ****/
  // {
  //   path: '/admin-app/',
  //   name: 'Dashboard',
  //   icon: 'Dashboard',
  //   // wrappers: [
  //   //   '@/wrappers/auth',
  //   // ],
  //   access: 'isAdministrator',
  //   // component: './SuperUsers/TableList',
  //   layout: 'mix',
  //   // component: './admin-app/dashboard',
  // },
  {
     path: '/admin-app/profile',
     name: 'Profile',
     hideInMenu: true,
     layout: 'mix',
     component: './admin-app/current-user/profile',
  },
  {
    path: '/admin-app/',
    redirect: '/admin-app/users',
  },
  {
    path: '/admin-app/users',
    name: 'Users',
    icon: 'UsergroupAddOutlined',
    // wrappers: [
    //   '@/wrappers/auth',
    // ],
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/users/list-users',
  },
  {
    path: '/admin-app/users/new',
    name: 'Add New User',
    hideInMenu: true,
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/users/create-user',
  },
  {
    path: '/admin-app/users/edit/:id',
    hideInMenu: true,
    name: 'Edit User',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/users/update-user',
  },
  {
    path: '/admin-app/destinations',
    name: 'Destinations',
    icon: 'EnvironmentOutlined',
    // wrappers: [
    //   '@/wrappers/auth',
    // ],
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/destinations/list-destination',
  },
  {
    path: '/admin-app/destinations/new',
    name: 'Add New Destination',
    hideInMenu: true,
    // icon: 'BankOutlined',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/destinations/create-destination',
    // component: './UnderConstructionPage',
    // access: 'isSuperAdmin',
    // Do not show the menu
    // menuRender: false,
    // Use the top menu when editing
    // layout: 'top',
  },
  {
    path: '/admin-app/destinations/edit/:id',
    hideInMenu: true,
    name: 'Edit Destination',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/destinations/update-destination',
  },
  {
    path: '/admin-app/destinations/view/:id',
    hideInMenu: true,
    name: 'View Destination',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/destinations/read-destination',
  },
  {
    path: '/admin-app/trips',
    name: 'Trips',
    icon: 'CalendarOutlined',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/trips/list-trips',
  },
  {
    path: '/admin-app/trips/new',
    name: 'Add New Trip',
    hideInMenu: true,
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/trips/create-trip',
  },
  {
    path: '/admin-app/trips/edit/:id',
    hideInMenu: true,
    name: 'Edit Trip',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/trips/update-trip',
  },
  {
    path: '/admin-app/accommodations',
    name: 'Accommodations',
    icon: 'HomeOutlined',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/accommodations/list-accommodations',
  },
  {
    path: '/admin-app/accommodations/new',
    name: 'Add New Accommodation',
    hideInMenu: true,
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/accommodations/create-accommodation',
  },
  {
    path: '/admin-app/accommodations/edit/:id',
    hideInMenu: true,
    name: 'Edit Accommodation',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/accommodations/update-accommodation',
  },
  {
    path: '/admin-app/attractions',
    name: 'Attractions',
    icon: 'PictureOutlined',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/attractions/list-attractions',
  },
  {
    path: '/admin-app/attractions/new',
    name: 'Add New Attraction',
    hideInMenu: true,
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/attractions/create-attraction',
  },
  {
    path: '/admin-app/attractions/edit/:id',
    hideInMenu: true,
    name: 'Edit Attraction',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/attractions/update-attraction',
  },
  {
    path: '/admin-app/notifications',
    name: 'Notifications',
    icon: 'NotificationOutlined',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/notifications/list-notifications',
  },
  {
    path: '/admin-app/notifications/new',
    name: 'Add New Notifications',
    hideInMenu: true,
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/notifications/create-notification',
  },
  {
    path: '/admin-app/notifications/edit/:id',
    hideInMenu: true,
    name: 'Edit Notifications',
    access: 'isAdministrator',
    layout: 'mix',
    component: './admin-app/notifications/update-notification',
  },
  {
    path: '/admin-app/weather-api-integration',
    name: 'Weather API Integration',
    icon: 'CloudOutlined',
    // wrappers: [
    //   '@/wrappers/auth',
    // ],
    access: 'isAdministrator',
    layout: 'mix',
    // component: './admin-app/dashboard',
  },

  // {
  //   path: '/admin-app',
  //   name: 'Admin App',
  //   icon: 'Dashboard',
  //   // access: 'isSuperAdmin',
  //   wrappers : [
  //     '@/wrappers/auth' ,
  //   ] ,
  //   component: './SuperUsers/TableList',
  //   routes: [
  //     // {path: '/admin-app', redirect: '/admin-app/list'},
  //     {
  //       path: '/admin-app/list',
  //       name: 'Super Users List',
  //       hideInMenu: true,
  //       component: './SuperUsers/TableList',
  //       // component: './UnderConstructionPage',
  //     },
  //     {
  //       path: '/admin-app/new',
  //       name: 'Add New Super User',
  //       hideInMenu: true,
  //       // icon: 'BankOutlined',
  //       component: './SuperUsers/CreateSuperUser',
  //       // component: './UnderConstructionPage',
  //       // access: 'isSuperAdmin',
  //       // Do not show the menu
  //       // menuRender: false,
  //       // Use the top menu when editing
  //       // layout: 'top',
  //     },
  //     // {
  //     //   path: '/super-users/:id',
  //     //   hideInMenu: true,
  //     //   name: 'Super User Details',
  //     // },
  //     {
  //       path: '/admin-app/update/:id',
  //       hideInMenu: true,
  //       name: 'Update Super User',
  //     },
  //     {
  //       path: '/admin-app/edit/:id',
  //       hideInMenu: true,
  //       name: 'Edit User',
  //       component: './SuperUsers/UpdateSuperUser',
  //     },
  //     {
  //       path: '/admin-app/view/:id',
  //       hideInMenu: true,
  //       name: 'View User',
  //       component: './SuperUsers/ViewSuperUser',
  //     },
  //   ]
  // },

  /**** End - App ****/

   /**** Start - User App ****/
   {
    path: '/user-app/profile',
    name: 'Profile',
    hideInMenu: true,
    layout: 'mix',
    component: './user-app/current-user/profile',
 },
 {
   path: '/user-app/',
   redirect: '/user-app/bookings',
 },
 {
   path: '/user-app/bookings',
   name: 'Bookings',
   icon: 'UsergroupAddOutlined',
   // wrappers: [
   //   '@/wrappers/auth',
   // ],
   access: 'isUser',
   layout: 'mix',
   component: './user-app/bookings/list-bookings',
 },
 {
  path: '/user-app/payments',
  name: 'Payments',
  icon: 'PictureOutlined',
  access: 'isUser',
  layout: 'mix',
  component: './user-app/payments/list-payments',
},
{
  path: '/user-app/trips',
  name: 'Trips',
  icon: 'PictureOutlined',
  access: 'isUser',
  layout: 'mix',
  component: './user-app/trips/list-trips',
},
    /**** Start - User App ****/

  {
    path: '/admin-app',
    name: 'App',
    // icon: 'app',
    layout: 'top',
    // component: './site/HomePage',
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   icon: 'home',
  //   layout: 'top',
  //   component: './site/HomePage',
  // },
  {
    path: '/',
    name: 'Test Home',
    icon: 'home',
    layout: 'top',
    component: './site/TestHomePage',
  },
  // {
  //   path: '/contact-us',
  //   name: 'ContactUs',
  //   icon: 'home',
  //   layout: 'top',
  //   component: './site/ContactUsPage',
  // },
  {
    path: '/authentication',
    name: 'Signup / Login',
    icon: 'LockOutlined',
    // wrappers: [
    //     '@/wrappers/auth',
    // ],
    // access: 'isSuperAdmin',
    layout: 'top',
    component: './authentication',
    // https://pro.ant.design/docs/advanced-menu/#change-the-layout-according-to-the-path
  },
  {
    path: '/checkout/success/:user_id/:booking_id/:payment_id/:stripe_checkout_session_id',
    hideInMenu: true,
    layout: 'top',
    component: './site/checkout/success',
  },
  {
    path: '/checkout/cancel/:user_id/:booking_id/:payment_id/:stripe_checkout_session_id',
    hideInMenu: true,
    layout: 'top',
    component: './site/checkout/cancel',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
