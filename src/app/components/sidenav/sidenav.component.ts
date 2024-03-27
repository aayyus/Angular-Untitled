import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  sideNavWidth = 0;

  toggleSideNav(): void {
    this.sideNavWidth = this.sideNavWidth === 0 ? 320 : 0;
  }
}
