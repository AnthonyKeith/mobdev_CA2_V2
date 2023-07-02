import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-business',
  templateUrl: 'business.page.html',
  styleUrls: ['business.page.scss'],
})

export class BusinessPage {
  articles: any[]=[];

  constructor(private newsService: NewsService, private navcontroller: NavController) {}

  ionViewDidEnter() {
    this.newsService.getTopHeadlines().subscribe((data: any) => {
      this.articles = data.articles;
    });
  }
  openArticle(articleId: number) {
    this.navcontroller.navigateForward(`/tabs/business/${articleId}`);
  }
}
