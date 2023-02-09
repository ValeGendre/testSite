import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  NAV_BUTTONS = [
    {name: 'Scripts', target_url:'/scripts'},
    {name: 'Articles', target_url:'/posts'},
    {name: 'Docs', target_url:'/documetation'},
  ]
}
