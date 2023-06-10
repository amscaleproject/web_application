import { Component, OnInit } from '@angular/core';
import {WsService} from '../_services';

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    pageTitle: string;
    constructor(
        public WsService: WsService
    ) {
        this.WsService.connect();
        this.pageTitle = 'Dashboard'
    }
    ngOnInit() {
        let getHelp = {"read":"help:home:en","correlator":2103708213};
        setTimeout(() => {
            this.WsService.sendGetXmlNodeStr(getHelp);
        }, 300);
    }
}
