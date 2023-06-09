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
  // contentInput = `
  //   <div class="help-content">
  //     <div class="detail-overlay-header">
  //       <h2>Dashboard Help Guide</h2>
  //     </div>
  //     <h3>AttikaMove Dashboard</h3>
  //       <p>
  //         The AttikaMove Dashboard provides a high level view into all the SDServers and
  //         Nodes managed by this instance of the AttikaMove management software. The Dashboard view is the default
  //         page on logging into AttikaMove.
  //       </p>
  //     <p>
  //       <span class="material-icons help-more-info">info</span>
  //       At any time you may return to the Dashboard by clicking on the "CompanyMove" logo in the top left of the browser.
  //     </p>
  //   </div>
  //   `;
  constructor(public OverlayService: OverlayService  ) {}
  showOverlay(content: string) {
    this.OverlayService.createOverlay(content);
  }
}
