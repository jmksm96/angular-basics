import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {ExMarksPipe} from './pipes/ex-marks.pipe';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExMarksPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
