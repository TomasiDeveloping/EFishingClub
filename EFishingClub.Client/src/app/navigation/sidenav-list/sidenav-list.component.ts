import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.scss'
})
export class SidenavListComponent {

  @Output() sidenavClose = new EventEmitter();
  onSidenavClose() {
    this.sidenavClose.emit();
  }
}
