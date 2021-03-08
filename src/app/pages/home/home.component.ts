import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isPositionFixed: boolean;
  hasReachedFooter: boolean;

  constructor() { }

  ngOnInit(): void {
    const footer = document.querySelector('.footer-wrapper');

    document.addEventListener('scroll', () => {
      this.isPositionFixed = window.scrollY > (window.visualViewport.height - 30);
      this.hasReachedFooter = this.isInViewport(footer);
    })
  }

  isInViewport(element) {
    const rect = element.getBoundingClientRect();

    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  }

  onMessageSent(): void {
  }

}
