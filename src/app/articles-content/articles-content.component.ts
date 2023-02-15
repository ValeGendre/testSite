import { Component } from '@angular/core';
import { PainService } from '../pain.service';

@Component({
  selector: 'app-articles-content',
  templateUrl: './articles-content.component.html',
  styleUrls: ['./articles-content.component.scss']
})
export class ArticlesContentComponent {

  message : string = 'Coucou je vais bien'
  constructor(private pain: PainService) {

  }

  ngOnInit() {
    this.pain.douleur$.asObservable().subscribe(data => this.message = data)
  }
}
