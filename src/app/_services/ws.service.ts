import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export interface MessageDataHome {
  message: string;
  time?: string;
}

// const CHAT_URL = "ws://172.17.0.1:5000/tree";
const CHAT_URL = "ws://localhost:5000/echo";
@Injectable({
  providedIn: 'root',
})
export class WsService {
  private socket$!: WebSocketSubject<any>;
  public receivedData: any;

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = webSocket(CHAT_URL);
      this.socket$.subscribe((data: any) => {
        console.log('Json schema: ', data);
        this.receivedData = data;
      });
    }
  }

  sendMessage(message: string) {
    this.socket$.next({ message });
  }

  close() {
    this.socket$.complete();
  }
}
