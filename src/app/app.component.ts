import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { LanguageService } from "./_services/LanguageService/language-service.service";
import {TerminalComponent} from "./terminal/terminal.component";


@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    currentLanguage: string;

    constructor(
        private languageService: LanguageService,
        private dialog: MatDialog
    ) {
        this.languageService.getCurrentLanguage().subscribe(lang => {
            this.currentLanguage = lang;
        });
    }

    setLanguage(lang: string): void {
        this.languageService.setCurrentLanguage(lang);
        this.currentLanguage = lang;
    }

    openTerminal(): void {
        this.dialog.open(TerminalComponent);
    }
}
