import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsData: any;
  constructor( private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  private getNews() {
    this.newsService.getTopHeadLines().subscribe((data) => {
      this.newsData = data;
    });
  }

}
