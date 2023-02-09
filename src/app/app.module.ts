import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavButtonComponent } from './header/nav-button/nav-button.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { DocContentComponent } from './doc-content/doc-content.component';
import { ScriptContentComponent } from './script-content/script-content.component';
import { ArticlesContentComponent } from './articles-content/articles-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavButtonComponent,
    SearchBarComponent,
    DocContentComponent,
    ScriptContentComponent,
    ArticlesContentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'documetation', component: DocContentComponent },
      { path: 'scripts', component: ScriptContentComponent },
      { path: 'posts', component: ArticlesContentComponent },
      {path: '', redirectTo: '/posts', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
