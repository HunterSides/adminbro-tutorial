const AdminBro = require('admin-bro');
const { User, Company, Estimate } = require('../models');
const { UserResource, CompanyResource, CustomerEstimate } = require('./resources');
const sidebarGroups = {
  user: {
    name: 'User Management',
    icon: 'User',
  },
  company: {
    name: 'Company Management',
    icon: 'Product'
  },
  estimate: {
    name: 'Estimate',
    icon: 'Finance'
  }
};
const adminBro = new AdminBro({
  rootPath: '/admin',
  loginPath: '/admin/login',
  resources: [{
      resource: User,
      options: {
        ...UserResource,
        parent: sidebarGroups.user,
      }
    }, {
      resource: Company,
      options: {
        ...CompanyResource,
        parent: sidebarGroups.company,
      }
    }, {
      resource: Estimate,
      options: {
        ...CustomerEstimate,
        parent: sidebarGroups.estimate,
      }
    }
  ],
  branding: {
    companyName: 'Atelier',
    softwareBrothers: false,
  }
});

module.exports = adminBro;