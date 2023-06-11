import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Site } from '../../models/site.model';
import { SitesApiService } from '../../services/sites-api.service';

@Component({
  selector: 'app-site-detail-page',
  templateUrl: './site-detail-page.component.html',
  styleUrls: ['./site-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteDetailPageComponent implements OnInit {
  public site$: Observable<Site | null> = of(null);

  constructor(
    private route: ActivatedRoute,
    private siteService: SitesApiService
  ) {}

  public ngOnInit(): void {
    this.site$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.siteService.getOne(id);
      })
    );
  }
}
