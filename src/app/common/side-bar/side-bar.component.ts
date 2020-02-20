import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cobiro-side-bar',
  templateUrl: 'side-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideBarComponent implements OnInit {
  constructor(private readonly router: Router, private readonly changeDetector: ChangeDetectorRef) { }

  url: string;
  menuOpened = false;
  private routeSubscription: Subscription = this.router.events.subscribe(e => {
    if (e instanceof NavigationEnd) {
      this.url = e.url;
    }
  });
  ngOnInit() { }

  public toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
    this.detectChanges(this.changeDetector)
  }

  private detectChanges(detector: ChangeDetectorRef): void {
    if (!detector['destroyed']) {
      detector.detectChanges();
    }
  }
}
