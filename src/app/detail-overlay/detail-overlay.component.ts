import {Component, Inject, Input} from '@angular/core';

@Component({
  selector: 'app-detail-overlay',
  templateUrl: './detail-overlay.component.html',
  styleUrls: ['./detail-overlay.component.css']
})
export class DetailOverlayComponent {
  constructor(@Inject('content') public content: string) {}
}
