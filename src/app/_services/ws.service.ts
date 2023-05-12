import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {ExchangeService} from "./exchange.service";

export interface MessageDataHome {
  message: string;
  time?: string;
}

const BACK_URL = "ws://172.17.0.1:5000/tree";

@Injectable({
  providedIn: 'root',
})
export class WsService {
  private socket$!: WebSocketSubject<any>;
  public receivedData: any;
  public activityLogKeysAr: any;
  public alertsKeysAr: any;

  public connect(): void {

    if (!this.socket$ || this.socket$.closed) {

      let exchServ = new ExchangeService(),
          sendMock = exchServ.sendMock,
          sendKey:any;

      this.socket$ = webSocket(BACK_URL);
      this.send( sendMock.auth );

      this.socket$.subscribe((res: any) => {
        this.receivedData = res;
        sendKey = exchServ.getKey(res);
        if(sendKey) this.send( sendMock[sendKey] );

        if( this.receivedData.response.hasOwnProperty("configTree") ) {
          this.activityLogKeysAr = Object.keys(res.response?.liveTree?.activityLog ?? {});
          this.alertsKeysAr = Object.keys(res.response?.liveTree?.alerts ?? {});
        }
      });

    }
  }

  send(obj: any) {
    let socket = this.socket$;
    socket.next(obj);
  }

  close() {
    this.socket$.complete();
  }
}
