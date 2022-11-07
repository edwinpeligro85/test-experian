import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AccountOverviewComponent } from './account-overview.component';

const routes: Routes = [{ path: '', component: AccountOverviewComponent, data: { title: marker('Account overview') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountOverviewRoutingModule {}
