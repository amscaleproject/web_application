import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponentComponent} from "./dialog-component/dialog-component.component";

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    constructor(public dialog: MatDialog) {}

    openDialog() {
        const dialogRef = this.dialog.open(DialogComponentComponent, {
            width: '400px',
            position: { right: '0' }
        });
    }
}
