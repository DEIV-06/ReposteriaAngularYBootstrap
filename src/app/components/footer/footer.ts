import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  
  constructor(private router: Router) {}

  scrollToTop(event: Event): void {
    event.preventDefault();
    
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.getAttribute('routerLink')) {
      const route = link.getAttribute('routerLink');
      this.router.navigate([route]).then(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}