// frontend/src/app/websocket.service.ts
import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

interface MessageData {
  message: string;
  time?: string;
}

/* const CHAT_URL = "ws://echo.websocket.org/"; */
const CHAT_URL = "ws://172.17.0.1:5000/ws";

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
