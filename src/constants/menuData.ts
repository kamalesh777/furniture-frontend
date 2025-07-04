import { USER_PERMISSION_ROUTE, SETTINGS_ROUTE } from './AppConstant'

const menuData = [
  {
    key: 'dashboard',
    path: '/',
    title: 'Dashboard',
    icon: 'DashboardOutlined',
  },
  {
    key: 'products',
    path: '/products',
    title: 'Products',
    icon: 'ProductOutlined',
  },
  {
    key: 'parties',
    path: '/parties',
    title: 'Parties',
    icon: 'UsergroupAddOutlined',
  },
  {
    key: 'orders',
    path: '/orders/purchases',
    title: 'Orders',
    icon: 'InboxOutlined',
    children: [
      {
        key: 'purchases',
        path: '/orders/purchases',
        title: 'Purchases',
        icon: 'ImportOutlined',
      },
      {
        key: 'sales',
        path: '/orders/sales',
        title: 'Sales',
        icon: 'ExportOutlined',
      },
    ],
  },
  {
    key: 'employees',
    path: '/employees',
    title: 'Employees',
    icon: 'ScheduleOutlined',
  },
  {
    key: 'expenses',
    path: '/expenses',
    title: 'Expenses',
    icon: 'FundProjectionScreenOutlined',
  },
  {
    key: 'reports',
    path: '/reports',
    title: 'Reports',
    icon: 'LineChartOutlined',
  },
  // Settings
  {
    key: 'settings',
    path: '/settings/shop-info',
    title: 'Settings',
    icon: 'SettingOutlined',
    children: [
      // Shop Info
      {
        key: 'shop-info',
        path: '/settings/shop-info',
        title: 'Shop Info',
        icon: 'ShopOutlined',
        pagemenu: [
          {
            key: 'shop-info-theme',
            href: '#theme-config',
            title: 'Theme Config',
            icon: '',
          },
          {
            key: 'shop-info-config',
            href: '#shop-config',
            title: 'Shop Config',
            icon: '',
          },
        ],
      },
      // Product Settings
      {
        key: 'product-settings',
        path: '/settings/product-settings',
        title: 'Product Settings',
        icon: 'ProfileOutlined',
        pagemenu: [
          {
            key: 'product-settings-brands',
            href: '#brands',
            title: 'Brands',
            icon: '',
          },
          {
            key: 'product-settings-categories',
            href: '#categories',
            title: 'Categories',
            icon: '',
          },
          {
            key: 'product-settings-unit-types',
            href: '#unit-types',
            title: 'Unit Types',
            icon: '',
          },
          {
            key: 'product-settings-units',
            href: '#units',
            title: 'Units',
            icon: '',
          },
        ],
      },
      // User Permissions
      {
        key: 'user-permissions',
        path: `${SETTINGS_ROUTE}${USER_PERMISSION_ROUTE}`,
        title: 'User Permissions',
        icon: 'PropertySafetyOutlined',
        pagemenu: [
          {
            key: 'user-permissions-page',
            path: `${SETTINGS_ROUTE}${USER_PERMISSION_ROUTE}/page-menu`,
            title: 'Page Menu',
            icon: '',
          },
          {
            key: 'user-roles-page',
            path: `${SETTINGS_ROUTE}${USER_PERMISSION_ROUTE}/roles`,
            title: 'Roles',
            icon: '',
          },
          {
            key: 'user-permission-page',
            path: `${SETTINGS_ROUTE}${USER_PERMISSION_ROUTE}/permissions`,
            title: 'Permissions',
            icon: '',
          },
        ],
      },
      {
        key: 'account-settings',
        path: '/settings/account-settings',
        title: 'Account Settings',
        icon: 'BarsOutlined',
      },
    ],
  },
]

export default menuData
