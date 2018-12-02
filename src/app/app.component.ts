import { Component, OnInit } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  title = "progressive-webapp-sample";

  constructor(private swUpdate: SwUpdate){}

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("A New version of site is available. Load New Version?")) {
          window.location.reload();
        }
      });
    }
  }
}
