import {Component, Inject, Input} from '@angular/core';
import {OverlayService} from "../_services/Overlay/overlay.service";

@Component({
  selector: 'app-detail-overlay',
  templateUrl: './detail-overlay.component.html',
  styleUrls: ['./detail-overlay.component.css']
})
export class DetailOverlayComponent {
  constructor(
      @Inject('content') public content: string,
      public OverlayService: OverlayService
  ) {}

  closeOverlay(){
    console.log('close overlay');
    this.OverlayService.closeOverlay();
  }

}
