import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsComponent } from "./news.component";
import { NewsService } from "./news.service";

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule],
  exports: [NewsComponent],
  providers: [ NewsService ]
})
export class NewsModule {}
