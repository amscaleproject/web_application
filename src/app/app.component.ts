import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LanguageService} from "./_services/LanguageService/language-service.service";


@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    currentLanguage: string;
    constructor(private languageService: LanguageService) {
        this.languageService.getCurrentLanguage().subscribe(lang => {
            this.currentLanguage = lang;
        });
    }
    setLanguage(lang: string): void {
        this.languageService.setCurrentLanguage(lang);
        this.currentLanguage = lang;
    }


}
