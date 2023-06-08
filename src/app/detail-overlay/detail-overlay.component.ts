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
      ])
    ]),
    trigger('fadeInOnEnter', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('hideElement', [
      state('hidden', style({
        opacity: 0,
        height: 0,
        padding: 0,
        margin: 0,
        display: 'none'
      })),
      state('visible', style({
        opacity: 1,
        height: '*',
        padding: '*',
        margin: '*',
        display: 'block'
      })),
      transition('visible => hidden', [
        animate('0.3s')
      ]),
      transition('hidden => visible', [
        animate('0.3s')
      ])
    ])
  ]
})
export class DetailOverlayComponent {
  isHidden = false;
  constructor(
      @Inject('content') public content: string,
      public OverlayService: OverlayService
  ) {}
  hideElement() {
    this.isHidden = true;
  }
  closeOverlay(){
    console.log('close overlay');


    this.OverlayService.closeOverlay();
  }



}
