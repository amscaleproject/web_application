import { Component, OnInit } from '@angular/core';
import {WsService} from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    constructor(public WsService: WsService) {
        this.WsService.connect();
    }
    ngOnInit() {}
}
