import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Site } from '../../models/site.model';
import { SitesApiService } from '../../services/sites-api.service';

@Component({
  selector: 'app-sites-list-page',
  templateUrl: './sites-list-page.component.html',
  styleUrls: ['./sites-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SitesListPageComponent implements OnInit {
  public sites$ = new BehaviorSubject<Site[]>([]);

  constructor(private readonly sitesApi: SitesApiService) {}

  public ngOnInit(): void {
    this.sitesApi.getAll().subscribe((sites) => {
      this.sites$.next(sites);
    });
  }
}
