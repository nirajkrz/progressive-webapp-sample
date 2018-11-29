import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsComponent } from "./news.component";
import { NewsService } from "./news.service";
import { NewsRoutingModule } from "./news-routing.module";

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule],
  exports: [NewsComponent],
  providers: [NewsService]
})
export class NewsModule {}
