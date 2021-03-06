import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../shared/component/module/dashboard/dashboard.component';
import { ECommerceComponent } from '../shared/component/module/e-commerce/e-commerce.component';
import { NotFoundComponent } from '../shared/component/not-found/not-found.component';
import {AdminGuard} from "../shared/guard/admin.guard";

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'manage-user',
      loadChildren: () => import('./manage-user/manage-user.module')
        .then(m => m.ManageUserModule),
    },
    {
      path: 'manage-homestay',
      loadChildren: () => import('./manage-home-stay/manage-home-stay.module')
        .then(m => m.ManageHomeStayModule),
      canActivate: [AdminGuard],
    },
    {
      path: 'manage-untility',
      loadChildren: () => import('./manage-utility/manage-utility.module')
        .then(m => m.ManageUtilityModule),
      canActivate: [AdminGuard],
    },
    {
      path: 'manage-house',
      loadChildren: () => import('./manage-house/manage-house.module')
        .then(m => m.ManageHouseModule),
    },
    {
      path: 'manage-post',
      loadChildren: () => import('./manage-post/manage-post.module')
        .then(m => m.ManagePostModule),
    },
    {
      path: 'manage-statistics',
      loadChildren: () => import('./manage-statistics/manage-statistics.module')
        .then(m => m.ManageStatisticsModule),
      canActivate: [AdminGuard],
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('../shared/component/module/layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('../shared/component/module/forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('../shared/component/module/ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('../shared/component/module/modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('../shared/component/module/extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('../shared/component/module/charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: '',
      redirectTo: 'manage-statistics',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
