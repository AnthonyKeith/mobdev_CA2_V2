import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss'],
})

export class NewsPage {
  articles: any[]=[];

  constructor(private newsService: NewsService, private navcontroller: NavController) {}

  ionViewDidEnter() {
    this.newsService.getTopHeadlines().subscribe((data: any) => {
      this.articles = data.articles;
    });
  }
  openArticle(articleId: number) {
    this.navcontroller.navigateForward(`/tabs/news/${articleId}`);
  }
}



