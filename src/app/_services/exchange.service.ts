import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  public sendMock:any;
  public correlatorsMock:any;
  public checks:any;
  constructor() {
    let sendMock_v1 = {
      auth: {action: {actions: {auth: {bind: {token: "AAAABwAgV+8IXdQG7pvi3hr8+uOr8WIRQNsgO7qU7gnkT8d4iC0="}}}}},
      readSett: {read: "liveTree:auth:sessions:current"},
      version: {version: ""},
      read: {read: ""}
    };
    let correlatorsMock_v1 = [2854523901, 3476491320, 2338275357, 2346431921];

    let sendMock_v2 = {
      auth: {action: {actions: {auth: {bind: {token: "AAAAAQAgmr+UIuqiHmiaBnNnvprMTESJkCKQ7wJ07a4gxaL/1iU="}}}}},
      auth_login: {action: {actions: {auth: {login: {username: "admin", password: "attikaattika", client_id: "web_ui"}}}}},
      readSett: {read: "liveTree:auth:sessions:current"},
      version: {version: ""},
      read: {read: ""}
    };
    let correlatorsMock_v2 = [2162170036, 4096069352, 2103708213, 1315651738, 693250135];

    this.sendMock = sendMock_v2;
    this.correlatorsMock = correlatorsMock_v2;

    this.addCorrelators();
  }

  getKey(res:any){

    if(res.response?.status) {
      if(res.response.status == 'success') {
        return 'readSett';
      } else {
        return 'auth_login';
      }
    }

    if( res.response?.liveTree?.auth?.sessions?.current?.auth_method  == "config" )
      return 'version';
    if( res.response == 'v03.04.00_rc1-259-wr-b8735915-hk-d3d4d8ee' )
      return 'read';
    return null;
  }
  addCorrelators(){
    let corrNum = 0;
    for (let prop in this.sendMock) {
      if (Object.prototype.hasOwnProperty.call(this.sendMock, prop)) {
        this.addCorrelator(prop, corrNum);
        corrNum++;
      }
    }
  }
  addCorrelator(key:string, step: number) {
    this.sendMock[key].correlator = this.correlatorsMock[step];
  }
}
