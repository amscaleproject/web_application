import {Component, Input} from '@angular/core';
import {OverlayService} from "../_services/Overlay/overlay.service";


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  inputs: ['title']
})
export class PageHeaderComponent {
  @Input() title: string | undefined;

  contentInput = `      
      <p>Контент оверлея</p>
      <div class="divClass">Div class content</div>      
    `;

  constructor(public OverlayService: OverlayService  ) {}

  showOverlay(content: string) {
    console.log('show overlay');
    this.OverlayService.createOverlay(content);
  }
  // closeOverlay(){
  //   console.log('close overlay');
  //   this.OverlayService.closeOverlay();
  // }



}
