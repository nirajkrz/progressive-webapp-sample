import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { HttpUtil } from "../shared/http-util";
import { AppHttpConfig } from "../shared/http-config";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  config = new AppHttpConfig();
  constructor(private httpClient: HttpClient) {}

  getTopHeadLines() {
    const params = new HttpParams().set("country", "us");
    const headers = this.config.httpOptions.headers;
    return this.httpClient
      .get(`${this.config.baseUrl}top-headlines`, {
        headers,
        params
      })
      .pipe(HttpUtil.mapAndCatchClient);
  }

  getNewsBySource(source) {
    const params = new HttpParams().set("sources", source);
    const headers = this.config.httpOptions.headers;
    return this.httpClient
      .get(`${this.config.baseUrl}top-headlines`, {
        headers,
        params
      })
      .pipe(HttpUtil.mapAndCatchClient);
  }
  getSources() {
    const headers = this.config.httpOptions.headers;
    return this.httpClient
      .get(
        `${this.config.baseUrl}
      sources`,
        { headers }
      )
      .pipe(HttpUtil.mapAndCatchClient);
  }
}
