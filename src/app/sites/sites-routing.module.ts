import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitesListPageComponent } from './components/sites-list-page/sites-list-page.component';
import { SiteDetailPageComponent } from './components/site-detail-page/site-detail-page.component';
import { RoomDetailsPageComponent } from './components/room-details-page/room-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: SitesListPageComponent,
  },
  {
    path: 'sites/:id',
    component: SiteDetailPageComponent,
  },
  {
    path: 'sites/:siteId/rooms/:roomId',
    component: RoomDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitesRoutingModule {}
