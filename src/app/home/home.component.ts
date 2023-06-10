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
    setLang(lang:string = 'en') {
        let getHelp = {"read":`help:home:${lang}`,"correlator":2103708213};
        setTimeout(() => {
            this.WsService.sendGetXmlNodeStr(getHelp);
        }, 300);
    }
    ngOnInit() {
        this.setLang();
    }
}
