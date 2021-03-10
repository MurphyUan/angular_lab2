import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  nOTimesPressed: number = 0;
  hidden = true;
  OnClick() {
    this.nOTimesPressed++;
  }
  show() {
    this.hidden == true ? this.hidden = false
                        : this.hidden = true;
  }
}
