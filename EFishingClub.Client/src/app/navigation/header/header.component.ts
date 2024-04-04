import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() public sidenavToggle = new EventEmitter();

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
