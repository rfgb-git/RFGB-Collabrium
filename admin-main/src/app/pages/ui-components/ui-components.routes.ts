import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
import { AppSupplierrequestComponent } from './supplierrequest/supplierrequest.component';
import { AppBuyerBoardingComponent } from './buyer-boarding/buyer-boarding.component';
import { AppAsnRequestComponent } from './asn-request/asn-request.component';
import { AppAsnDashboardComponent } from './asn-dashboard/asn-dashboard.component';
import { AppAsnComponent } from './asn/asn.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgeComponent,
      },
      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
      {
        path: 'supplierrequest',
        component: AppSupplierrequestComponent,
      },
      {
        path: 'buyerboarding',
        component: AppBuyerBoardingComponent,
      },
      {
        path: 'asnrequest',
        component: AppAsnRequestComponent,
      },
      {
        path: 'asndashboard',
        component: AppAsnDashboardComponent,
      },
      {
        path: 'asn',
        component: AppAsnComponent,
      },
    ],
  },
];
