import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatTabsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
