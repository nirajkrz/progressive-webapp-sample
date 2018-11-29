import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable, of } from "rxjs";
import { ServerResponse } from "./server-response.interface";
import { HttpUtil } from "../shared/http-util";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  baseUrl = "https://newsapi.org/v2/";
  private apiKey: string = "XSMjQ1ZjcxYjA4MTA3NDdmMzlkNWFiMzVkMmRkYzI5Y2EM54=";
  constructor(private httpClient: HttpClient) {}

  private getUsableKey(): string {
    return atob(this.apiKey.split("XS")[1].split("M54")[0] + "=");
  }

  getNews(): Observable<any> {
    const headers = this.headers;
    return this.httpClient
      .get(`${this.baseUrl}top-headlines`, {
        headers
      })
      .pipe(HttpUtil.mapAndCatchClient);
  }

  get headers() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("X-Api-Key", this.getUsableKey());

    return headers;
  }
}
