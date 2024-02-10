import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import Footer from "./footer/footer.component";
import Header from "./header/header.component";

@Component({
  selector: "app-layout",
  standalone: true,
  template: `
    <app-header />
    <router-outlet />
    <app-footer />
  `,
  styles: ``,
  imports: [Header, Footer, RouterOutlet],
})
export default class Layout {}
