import { Injectable } from '@angular/core';
//created message.service to avoid coupled

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
    console.log(this.messages)
  }

  clear() {
    this.messages = [];
  }
}
