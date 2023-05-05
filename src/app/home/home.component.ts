import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import {UserService, WebSocketService} from '../_services';
import { WsService} from "../_services";

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    message = '';

    constructor(private userService: UserService, public WsService: WsService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
        this.WsService.connect();
        this.sendMessage('');
    }

    sendMessage(message: string) {
        this.WsService.sendMessage(message);
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }
    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}
