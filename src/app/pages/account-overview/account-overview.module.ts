import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountOverviewRoutingModule } from './account-overview-routing.module';
import { AccountOverviewComponent } from './account-overview.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AccountOverviewComponent],
  imports: [CommonModule, AccountOverviewRoutingModule, TranslateModule, NgbDropdownModule],
})
export class AccountOverviewModule {}
