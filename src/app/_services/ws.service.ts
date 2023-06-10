import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {ExchangeService} from "./exchange.service";
import { cloneDeep } from 'lodash';

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
  public initResponse: any;
  public helpContent: any;
  public anyResponse: any;
  public getType: string = '';
  public helpContentStr: string = '';
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
          this.initResponse = cloneDeep(this.receivedData.response);
          this.activityLogKeysAr = Object.keys(this.initResponse?.liveTree?.activityLog ?? {});
          this.alertsKeysAr = Object.keys(this.initResponse?.liveTree?.alerts ?? {});
        }
        if( this.getType == 'help'){
          this.helpContentStr = `<div class="help-content">${this.receivedData.response}</div>`;
        }
      });

    }
  }

  send(obj: any) {
    let socket = this.socket$;
    socket.next(obj);
  }

  sendGetXmlNodeStr(obj: any) {
    let socket = this.socket$;
    this.getType = 'help';
    socket.next(obj);
  }

  close() {
    this.socket$.complete();
  }
}
