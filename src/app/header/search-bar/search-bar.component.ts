import { Component } from '@angular/core';
import { PainService } from 'src/app/pain.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {


  constructor(private pain: PainService) {

  }


  showPain() {
    let searchBarInput = document.getElementById('searchBarInput') as HTMLInputElement;
    this.pain.showPain(searchBarInput.value);
  }

}
