import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export interface MessageData {
  message: string;
  time?: string;
}

const CHAT_URL = "ws://172.17.0.1:5000/tree";

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$!: WebSocketSubject<any>;
  public receivedData: MessageData[] = [];

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = webSocket(CHAT_URL);

      this.socket$.subscribe((data: MessageData) => {
        this.receivedData.push(data);

        console.log('data from back: ', data);

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
