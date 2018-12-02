import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isDarkTheme: boolean;
  constructor() {}

  ngOnInit() {
    this.isDarkTheme = true;
  }

  toggleDarkTheme() {
    return !this.isDarkTheme;
  }
}
