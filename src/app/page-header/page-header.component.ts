import {Component, Input} from '@angular/core';
import {OverlayService} from "../_services/Overlay/overlay.service";
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  inputs: ['title', 'contentInput']
})
export class PageHeaderComponent {
  @Input() title: string | undefined;
  @Input() contentInput: string;

  constructor(public OverlayService: OverlayService  ) {}
  showOverlay(content: string) {
    this.OverlayService.createOverlay(content);
  }
}
