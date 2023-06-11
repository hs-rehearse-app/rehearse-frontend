import { Component } from '@angular/core';

interface NavRoute {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public navRoutes: NavRoute[] = [{ title: 'Home', path: '/' }];
}
