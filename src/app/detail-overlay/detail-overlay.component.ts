import {Component, Inject, Input} from '@angular/core';
import {OverlayService} from "../_services/Overlay/overlay.service";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-detail-overlay',
  templateUrl: './detail-overlay.component.html',
  styleUrls: ['./detail-overlay.component.scss'],
  animations: [
    trigger('slideInRightAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-out', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
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
