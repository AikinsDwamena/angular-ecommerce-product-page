import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass']
})
export class NavigationBarComponent {

  closeIconVisible:boolean = true

  changeMenuVisibility():void{
    this.closeIconVisible = !this.closeIconVisible
  }
}
