import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() innerText: string | undefined;
  @Output() routerEvent: EventEmitter<string> = new EventEmitter<string>();
  buttonContent: string | undefined;

  navigation(route?: string) {
    this.routerEvent.emit(route);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
