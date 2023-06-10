import { Component, OnInit } from '@angular/core';
import {WsService} from '../_services';
import {LanguageService} from "../_services/LanguageService/language-service.service";

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    pageTitle: string;
    constructor(
        public WsService: WsService,
        private languageService: LanguageService
    ) {
        this.WsService.connect();
        this.pageTitle = 'Dashboard';

        this.languageService.getCurrentLanguage().subscribe(lang => {
            console.log('cur lang from home: ', lang);
            this.setLang(lang);

        });
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
