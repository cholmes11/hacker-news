import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

export class AppRoute {
  constructor(
    public routerName?: string,
    public routerLink?: string
  ) {
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hacker News';

  appRoutes: AppRoute[] = [
    new AppRoute('Top', '/top'),
    new AppRoute('Latest', '/latest'),
    new AppRoute('Ask', 'ask'),
    new AppRoute('Show', '/show'),
    new AppRoute('Jobs', '/jobs')
  ];

  activeRoute: AppRoute; // = this.appRoutes[0];

  constructor(
    private cookieService: CookieService
  ) {
  }

  ngOnInit() {
    const lastActiveRoute = this.cookieService.get('last-active-route');

    if (lastActiveRoute != null && lastActiveRoute.length > 0) {
      const index = this.appRoutes.findIndex((route: AppRoute) => route.routerLink === lastActiveRoute);
      this.activeRoute = this.appRoutes[index];
    } else {
      this.activeRoute = this.appRoutes[0];
    }
  }
}
