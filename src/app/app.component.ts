// src/app/app.component.ts
import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Inject } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('pageFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(6px)' }),
        animate('450ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  isChallengeSent = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Only run in browser, not during SSR
    if (isPlatformBrowser(this.platformId)) {
      // Set current year for footer
      const yearElement = document.getElementById('year');
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear().toString();
      }
    }
  }

  // Simple email-based challenge (no HTTP needed)
  sendChallenge() {
    if (this.isChallengeSent) return;

    // Only run in browser
    if (!isPlatformBrowser(this.platformId)) return;

    const subject = '🚀 Portfolio Challenge Alert!';
    const body = `Someone just clicked the challenge button on your portfolio!

Time: ${new Date().toLocaleString()}
User Agent: ${navigator.userAgent.substring(0, 100)}...
Page URL: ${window.location.href}

Time to connect with a potential opportunity!`;

    // Open default email client
    const emailUrl = `mailto:piyushchandra41000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl);
    
    this.isChallengeSent = true;
    
    // Reset after 30 seconds for demo purposes
    setTimeout(() => {
      this.isChallengeSent = false;
    }, 30000);
  }

  resetChallenge() {
    this.isChallengeSent = false;
  }
}