import { Component } from '@angular/core';
import {WsService} from '../_services';
import {LanguageService} from "../_services/LanguageService/language-service.service";

@Component({
  selector: 'app-pool-list',
  templateUrl: './pool-list.component.html',
  styleUrls: ['./pool-list.component.css']
})
export class PoolListComponent {
  pageTitle: string;
  currentLanguage: string;
  constructor(
      public WsService: WsService,
      private languageService: LanguageService
  ) {
    this.pageTitle = 'All Pools';
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
      this.setLang(this.currentLanguage);
    });
  }

  setLang(lang:string = 'en') {
    let getHelp = {"read":`help:pool-list:${lang}`,"correlator":2103708213};
    setTimeout(() => {
      this.WsService.sendGetXmlNodeStr(getHelp);
    }, 300);
  }
  ngOnInit() {
    this.setLang(this.currentLanguage);
  }

}
