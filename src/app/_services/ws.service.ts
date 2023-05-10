import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export interface MessageDataHome {
  message: string;
  time?: string;
}

// const CHAT_URL = "ws://172.17.0.1:5000/tree";
// const CHAT_URL = "ws://localhost:5000/echo";

const CHAT_URL = "ws://localhost:5000";
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

      this.socket$ = webSocket(CHAT_URL);

      console.log('this.receivedData: ', this.receivedData);

      let send;
      let trigger;

      send = {
        action: {
          actions: {
            auth: {
              bind: {
                token: "AAAABwAgV+8IXdQG7pvi3hr8+uOr8WIRQNsgO7qU7gnkT8d4iC0="
              }
            }
          }
        },
        correlator: 2854523901
      };

      console.log('send: ', send);
      // this.socket$.next( JSON.stringify(send) );
      this.socket$.next( send );




      this.socket$.subscribe((data: any) => {

        console.log('Json input: ', data);

        this.receivedData = data;


        console.log('this.receivedData from subscribe: ', this.receivedData);
        console.log('this.receivedData from subscribe: ', this.receivedData.response?.status);

        if(this.receivedData.response?.status == 'success') {
            send ={
                read: "liveTree:auth:sessions:current",
                correlator: "3476491320"
            }
            // this.socket$.next( JSON.stringify(send) );
            this.socket$.next( send );
        }

        if( this.receivedData.response?.liveTree?.auth?.sessions?.current?.auth_method  == "config" ) {
          send = {
            version: "",
            correlator: 2338275357
          };
          // this.socket$.next( JSON.stringify(send) );
          this.socket$.next( send );
        }


        if( this.receivedData.response == 'v03.04.00_rc1-259-wr-b8735915-hk-d3d4d8ee' ) {
          send = {
            read: "",
            correlator: "2346431921"
          };
          // this.socket$.next( JSON.stringify(send) );
          this.socket$.next( send );
        }



        this.activityLogKeysAr = [];
        this.alertsKeysAr = [];

        if( this.receivedData.response.hasOwnProperty("configTree") ) {
          console.log('last step');
          this.activityLogKeysAr = Object.keys(data.response?.liveTree?.activityLog);
          this.alertsKeysAr = Object.keys(data.response?.liveTree?.alerts);
        }

      });





    }
  }

  sendMessage(message: string) {
    // this.socket$.next({ message });
  }

  close() {
    this.socket$.complete();
  }
}
