import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {
  @Input() defaultMenuName!: string;
  menuName!:string;
  highlighted:string = '';

  ngOnInit() {
    this.menuName = this.defaultMenuName;
  }

  nav_clicked() {
    this.highlighted = this.highlighted === '' ? 'button-hightlight': '';
  }
}
