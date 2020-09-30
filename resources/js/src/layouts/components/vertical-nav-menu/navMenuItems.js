/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: null,
    name: 'Dashboard',
    tagColor: 'warning',
    icon: 'HomeIcon',
    i18n: 'Dashboard',
    submenu: [
        {
          url: '#',
          name: 'Report Card',
          slug: 'dashboard-analytics',
          i18n: 'Report Card'
        },
        {
          url: '#',
          name: 'Awards and achievements',
          slug: 'dashboard-ecommerce',
          i18n: 'Awards and achievements'
        },
        {
            url: '#',
            name: 'Teachers',
            slug: 'dashboard-ecommerce',
            i18n: 'Teachers'
        },
        {
            url: '#',
            name: 'Friends',
            slug: 'dashboard-ecommerce',
            i18n: 'Friends'
        },
    ]
  },
    {
        url: null,
        name: 'Lessons',
        tagColor: 'warning',
        icon: 'ArchiveIcon',
        i18n: 'Lessons',
        submenu: [
            {
                url: '#',
                name: 'New (1)',
                slug: 'dashboard-analytics',
                i18n: 'New (1)'
            },
            {
                url: '#',
                name: 'Late',
                slug: 'dashboard-ecommerce',
                i18n: 'Late'
            },
            {
                url: '#',
                name: 'History',
                slug: 'dashboard-ecommerce',
                i18n: 'History'
            },
            {
                url: '#',
                name: 'Friends',
                slug: 'dashboard-ecommerce',
                i18n: 'Friends'
            },
        ]
    },
    {
        url: null,
        name: 'Schedule',
        tagColor: 'warning',
        icon: 'CalendarIcon',
        i18n: 'Schedule',
    },
    {
        url: null,
        name: 'After school',
        tagColor: 'warning',
        icon: 'BoxIcon',
        i18n: 'After school',
        submenu: [
            {
                url: '#',
                name: 'Games',
                slug: 'dashboard-analytics',
                i18n: 'Games'
            },
            {
                url: '#',
                name: 'Reading',
                slug: 'dashboard-ecommerce',
                i18n: 'Reading'
            },
            {
                url: '#',
                name: 'Videos',
                slug: 'dashboard-ecommerce',
                i18n: 'Videos'
            },
        ]
    },
]

