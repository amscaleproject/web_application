import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  public sendMock:any;
  public correlatorsMock:any;
  public checks:any;
  constructor() {
    this.sendMock = {
      auth: {action: {actions: {auth: {bind: {token: "AAAABwAgV+8IXdQG7pvi3hr8+uOr8WIRQNsgO7qU7gnkT8d4iC0="}}}}},
      readSett: {read: "liveTree:auth:sessions:current"},
      version: {version: ""},
      read: {read: ""}
    };
    // this.sendMock = {
    //   auth: {action: {actions: {auth: {bind: {token: "AAAAAQAgmr+UIuqiHmiaBnNnvprMTESJkCKQ7wJ07a4gxaL/1iU="}}}}},
    //   Token_invalid: {response: {reason: "Token invalid", status: "aaa/token_invalid"}},
    //   readSett: {read: "liveTree:auth:sessions:current"},
    //   version: {version: ""},
    //   read: {read: ""}
    // };

    this.correlatorsMock = [2854523901, 3476491320, 2338275357, 2346431921];
    this.addCorrelators();
    this.checks = {

    }
  }

  getKey(res:any){
    if(res.response?.status == 'success')
      return 'readSett';
    if( res.response?.liveTree?.auth?.sessions?.current?.auth_method  == "config" )
      return 'version';
    if( res.response == 'v03.04.00_rc1-259-wr-b8735915-hk-d3d4d8ee' )
      return 'read';
    return null;
  }
  addCorrelators(){
    this.addCorrelator('auth', 0);
    this.addCorrelator('readSett', 1);
    this.addCorrelator('version', 2);
    this.addCorrelator('read', 3);
  }

  addCorrelator(key:string, step: number) {
    this.sendMock[key].correlator = this.correlatorsMock[step];
  }
}
