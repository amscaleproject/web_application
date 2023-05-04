import { Component, OnDestroy } from '@angular/core';
import { WebSocketService } from '../_services';

@Component({templateUrl: 'testws.component.html'})
export class TestwsComponent implements OnDestroy {
  message = '';

  constructor(public webSocketService: WebSocketService) {
    this.webSocketService.connect();
  }

  sendMessage(message: string) {
    this.webSocketService.sendMessage(message);
  }

  ngOnDestroy() {
    this.webSocketService.close();
  }
}