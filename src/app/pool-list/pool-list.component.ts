import { Component } from '@angular/core';
import {WsService} from '../_services';

@Component({
  selector: 'app-pool-list',
  templateUrl: './pool-list.component.html',
  styleUrls: ['./pool-list.component.css']
})
export class PoolListComponent {
  pageTitle: string;
  constructor(public WsService: WsService) {
    this.pageTitle = 'All Pools'
  }
  ngOnInit(){
    let getHelp = {"read":"help:pool-list:en","correlator":2103708213};
    setTimeout(() => {
      this.WsService.sendGetXmlNodeStr(getHelp);
    }, 300);
  }

}
