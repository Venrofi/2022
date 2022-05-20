import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string; // ! - the variable is required
  @Input() color?: string; // ? - the variable is optional
  @Output() btnClick = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  onClick(){
    console.log(this.text);
    this.btnClick.emit();
  }

}
