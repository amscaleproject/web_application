import {Component, Inject, Input} from '@angular/core';
import {OverlayService} from "../_services/Overlay/overlay.service";
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-detail-overlay',
  templateUrl: './detail-overlay.component.html',
  styleUrls: ['./detail-overlay.component.scss'],
  animations: [
    trigger('slideInRightAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('fadeInOnEnter', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-in', style({ opacity: 0 }))
      ]),
    ])
  ]
})
export class DetailOverlayComponent {
  panelHided = false;
  bgHided = false;
  constructor(
      @Inject('content') public content: string,
      public OverlayService: OverlayService
  ) {}
  closeOverlay(){
    this.panelHided = true;
    this.bgHided = true;

    setTimeout(() => {
      this.OverlayService.closeOverlay();
    }, 300);

  }

}
