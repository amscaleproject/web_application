import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {WsService} from '../_services';
import {LanguageService} from "../_services/LanguageService/language-service.service";
import {NgTerminal} from "ng-terminal";

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {

    @ViewChild('term', {static: false}) child: NgTerminal;

    pageTitle: string;
    currentLanguage: string;
    prompt = 'this prompt text';
    constructor(
        public WsService: WsService,
        private languageService: LanguageService
    ) {
        this.WsService.connect();
        this.pageTitle = 'Dashboard';
        this.languageService.getCurrentLanguage().subscribe(lang => {
            this.currentLanguage = lang;
            this.setLang(this.currentLanguage);
        });
    }
    setLang(lang:string = 'en') {
        let getHelp = {"read":`help:home:${lang}`,"correlator":2103708213};
        setTimeout(() => {
            this.WsService.sendGetXmlNodeStr(getHelp);
        }, 300);
    }
    ngOnInit() {
        this.setLang(this.currentLanguage);
    }


    ngAfterViewInit() {
        this.child.onData().subscribe((input) => {
            if (input === '\r') {
                this.child.write(this.prompt);
            } else if (input === '\u007f') {
                // Проверка на определенность объекта
                if (this.child && this.child.underlying && this.child.underlying.buffer && this.child.underlying.buffer.active && this.child.underlying.buffer.active.cursorX > 2) {
                    this.child.write('\b \b');
                }
            } else if (input === '\u0003') {
                this.child.write('^C');
                this.child.write(this.prompt);
            } else {
                this.child.write(input);
            }
        });
    }


}
