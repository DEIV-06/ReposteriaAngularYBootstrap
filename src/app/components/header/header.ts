import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
    ngOnInit() {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100
    });
  }
}