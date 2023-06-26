import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgTerminal } from 'ng-terminal';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
})
export class TerminalComponent implements AfterViewInit {
  @ViewChild('term', { static: false }) child!: NgTerminal;

  private socket!: WebSocket;
  private prompt = '> ';

  inputData: string = '';

  ngOnInit() {

    this.socket = new WebSocket('ws://172.17.0.1:5000/terminal');

    this.socket.onmessage = (event) => {
      const message = event.data.trim();
      this.child.write(`\r\n${message}\r\n${this.prompt}`);
    };

    this.socket.onopen = () => {
      this.child.write(this.prompt);
    };
  }

  ngAfterViewInit() {
    this.child.onData().subscribe((input) => {
      if (input === '\r') {
        this.socket.send(this.inputData);
        this.inputData = '';
      } else if (input === '\u007f') {
        if (this.inputData.length > 0) {
          this.inputData = this.inputData.slice(0, -1);
          this.child.write('\b \b');
        }
      } else if (input === '\u0003') {
        // Handling Ctrl+C
        this.child.write('^C');
        this.child.write(`\r\n${this.prompt}`);
      } else {
        this.inputData += input;
        this.child.write(input);
      }
    });
  }
}
