import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './side-login/side-login.component';
import { AppSideRegisterComponent } from './side-register/side-register.component';
import { AppVendorLoginComponent } from './vendor-login/vendor-login.component';
import { AppVendorRegisterComponent } from './vendor-register/vendor-register.component';
import { AppBuyerPortalComponent } from './buyer-portal/buyer-portal.component';
import { AppSupplierPortalComponent } from './supplier-portal/supplier-portal.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
      {
        path: 'vendor-login',
        component: AppVendorLoginComponent,
      },
      {
        path: 'Vendor-register',
        component: AppVendorRegisterComponent,
      },
      {
        path: 'buyer-portal',
        component: AppBuyerPortalComponent,
      },
      {
        path: 'supplier-portal',
        component: AppSupplierPortalComponent,
      },
    ],
  },
];
