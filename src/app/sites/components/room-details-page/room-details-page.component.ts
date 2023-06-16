import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Room } from '../../models/site.model';
import { ActivatedRoute } from '@angular/router';
import { RoomsApiService } from '../../services/rooms-api.service';

@Component({
  selector: 'app-room-details-page',
  templateUrl: './room-details-page.component.html',
  styleUrls: ['./room-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomDetailsPageComponent {
  public room$: Observable<Room | null> = of(null);

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomsApiService
  ) {}

  public ngOnInit(): void {
    this.room$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const roomId = Number(params.get('roomId'));

        return this.roomService.getOne(roomId);
      })
    );
  }
}
