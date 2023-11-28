import { Component, Input, SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ng on changes ');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ng do check called');
  }

}

