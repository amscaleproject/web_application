import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  private socket!: WebSocket;
  public inputData!: string;

  ngOnInit() {
    this.socket = new WebSocket('ws://172.17.0.1:5000/terminal');

    this.socket.onmessage = (event: MessageEvent) => {
      this.inputData += event.data;
    };
  }

  onInput(event: KeyboardEvent) {
    this.socket.send(event.key);
  }
}
