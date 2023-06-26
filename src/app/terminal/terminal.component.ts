import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgTerminal } from 'ng-terminal';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
})
export class TerminalComponent implements AfterViewInit {
  @ViewChild('term', { static: false }) child: NgTerminal;

  private socket: WebSocket;
  private prompt = 'this prompt 250623';

  // Необходимо добавить свойство inputData
  inputData: string = '';

  ngOnInit() {
    // Создание соединения с вебсокетом
    this.socket = new WebSocket('ws://172.17.0.1:5000/terminal');

    // Обработка ответа от сервера
    this.socket.onmessage = (event) => {
      const message = event.data;
      this.child.write(`\n${message}\n${this.prompt}`);
    };
  }

  ngAfterViewInit() {
    this.child.onData().subscribe((input) => {
      if (input === '\r') {
        // Отправка данных через вебсокет на сервер
        this.socket.send(this.inputData);
        this.inputData = ''; // очищаем буфер ввода
      } else if (input === '\u007f') {
        if (this.inputData.length > 0) {
          this.inputData = this.inputData.slice(0, -1);
          this.child.write('\b \b');
        }
      } else if (input === '\u0003') {
        this.child.write('^C');
        this.child.write(this.prompt);
      } else {
        this.inputData += input;
        this.child.write(input);
      }
    });
  }
}
