import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import { SitesListPageComponent } from './components/sites-list-page/sites-list-page.component';
import { SiteDetailPageComponent } from './components/site-detail-page/site-detail-page.component';

@NgModule({
  declarations: [SitesListPageComponent, SiteDetailPageComponent],
  imports: [CommonModule, SitesRoutingModule],
})
export class SitesModule {}
