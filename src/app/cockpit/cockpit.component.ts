import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // public newServerName: string;
  // public newServerContent: string;
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  onAddServer(newServerNameInput) {
    // console.log(this.serverContentInput);
    // this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
    this.serverCreated.emit({ serverName: newServerNameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(newServerNameInput) {
    // this.blueprintCreated.emit({ serverName:this.newServerName, serverContent: this.newServerContent });
    this.blueprintCreated.emit({ serverName: newServerNameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }
}
