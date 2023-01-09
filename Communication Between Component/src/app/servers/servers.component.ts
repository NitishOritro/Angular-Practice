import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  userName = "";
  allowNewServer = true;
  allowNewButton = false;
  serverCreationStatus = "No server was created";
  onClick = "No";

  constructor(){
    setTimeout(() => {
       this.allowNewServer = false;
       this.allowNewButton = true;
    },4000);
  }
  ngOnInit(){
  }

  onCreateServer(){
    this.onClick = "Yes";
    this.serverCreationStatus = "server was created";
  }

}
