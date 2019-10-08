import {Component, OnInit} from '@angular/core';

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

  activeRoute = this.appRoutes[0];

  constructor() {
  }

  ngOnInit() {
  }
}
