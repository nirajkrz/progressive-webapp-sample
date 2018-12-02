import { HttpHeaders } from "@angular/common/http";

export class AppHttpConfig {
  baseUrl: string = "https://newsapi.org/v2/";
  private apiKey: string = "XSMjQ1ZjcxYjA4MTA3NDdmMzlkNWFiMzVkMmRkYzI5Y2EM54=";

  httpOptions: any = {
    headers: new HttpHeaders({
      Authorization: `${this.getUsableKey()}`
    })
  };

  get key(){
      return this.getUsableKey();
  }

  private getUsableKey(): string {
    return atob(this.apiKey.split("XS")[1].split("M54")[0] + "=");
  }
}
