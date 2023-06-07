import { Component, OnInit } from '@angular/core';
import {WsService} from '../_services';
import { MatDialog } from '@angular/material/dialog';
import {OverlayService} from "../_services/Overlay/overlay.service";
import {DetailOverlayComponent} from "../detail-overlay/detail-overlay.component";


@Component({
    templateUrl: 'home.component.html'

})
export class HomeComponent implements OnInit {

    pageTitle: string;

    constructor(
        public WsService: WsService,
        public OverlayService: OverlayService,
        // public dialog: MatDialog
    ) {

        this.WsService.connect();


        this.pageTitle = 'Dashboard'
    }

    showOverlay(content: string) {
        console.log('content from home component ts: ', content);
        this.OverlayService.createOverlay(content);
    }



    ngOnInit() {}


}
