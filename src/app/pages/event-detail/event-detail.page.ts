import { Component, OnInit } from '@angular/core';

// services
import { EventService } from '../../services/event/event.service';

// router
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss']
})
export class EventDetailPage implements OnInit {
  public currentEvent: any = {};

  constructor(
    private eventSercice: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const eventId: string = this.route.snapshot.paramMap.get('id');
    this.eventSercice
      .getEventDetail(eventId)
      .get()
      .then(eventSnapshot => {
        this.currentEvent = eventSnapshot.data();
        this.currentEvent.id = eventSnapshot.id;
      });
  }
}
