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
      <div _ngcontent-hoy-c13="" class="help-content">
          <div _ngcontent-hoy-c13="" class="detail-overlay-header"><h2 _ngcontent-hoy-c13="">Dashboard Help Guide</h2>
          </div>
          <h3 _ngcontent-hoy-c13="">AttikaMove Dashboard</h3>
          <p _ngcontent-hoy-c13="">The AttikaMove Dashboard provides a high level view into all the SDServers and
              Nodes managed by this instance of the AttikaMove management software. The Dashboard view is the default
              page on logging into AttikaMove.</p>
          <p _ngcontent-hoy-c13=""><span _ngcontent-hoy-c13="" class="material-icons help-more-info">info</span> At
              any time you may return to the Dashboard by clicking on the "CompanyMove" logo in the top left of the
              browser.
          </p>
      </div>      
    `;
  constructor(public OverlayService: OverlayService  ) {}

  showOverlay(content: string) {
    console.log('show overlay');
    this.OverlayService.createOverlay(content);
  }
}
