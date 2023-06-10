import { Component, OnInit } from '@angular/core';
import {WsService} from '../_services';

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    pageTitle: string;
    helpContent: string = `    
    <div class="help-content">
      <div class="detail-overlay-header">
        <h2>Dashboard Help Guide</h2>
      </div>
      <h3>AttikaMove Dashboard</h3>
        <p>
          The AttikaMove Dashboard provides a high level view into all the SDServers and
          Nodes managed by this instance of the AttikaMove management software. The Dashboard view is the default
          page on logging into AttikaMove.
        </p>
      <p>
        <span class="material-icons help-more-info">info</span> 
        At any time you may return to the Dashboard by clicking on the "CompanyMove" logo in the top left of the browser.
      </p>
    </div>      
    `;
    constructor(
        public WsService: WsService
    ) {
        this.WsService.connect();
        this.pageTitle = 'Dashboard'
    }
    ngOnInit() {
        let getHelp = {"read":"help:home:en","correlator":2103708213};
        setTimeout(() => {
            // this.WsService.send(getHelp);
            this.WsService.sendGetXmlNodeStr(getHelp);
        }, 300);
    }
}
