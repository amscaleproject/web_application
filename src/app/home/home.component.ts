import { Component, OnInit } from '@angular/core';
import {WsService} from '../_services';
import { MatDialog } from '@angular/material/dialog';


@Component({
    templateUrl: 'home.component.html'

})
export class HomeComponent implements OnInit {

    pageTitle: string;

    constructor(
        public WsService: WsService,
        public dialog: MatDialog
    ) {
        this.WsService.connect();
        this.pageTitle = 'Dashboard'
    }



    ngOnInit() {}


}
