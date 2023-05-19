import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  flag = true
  headtTitle = "Hi !";
  hi = setInterval((
    )=>{
      this.headtTitle = this.flag ? "Login !":"Hi !";
      this.flag = !this.flag;
    },1000);
}
