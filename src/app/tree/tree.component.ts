import { Component, OnDestroy } from '@angular/core';
import { WebSocketService } from '../_services';

@Component({templateUrl: 'tree.component.html'})
export class TreeComponent implements OnDestroy {
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