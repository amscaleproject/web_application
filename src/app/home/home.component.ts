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

    ngOnInit() {}
}
