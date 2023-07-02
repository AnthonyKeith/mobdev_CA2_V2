import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sports',
  templateUrl: 'sports.page.html',
  styleUrls: ['sports.page.scss'],
})

export class SportsPage {
  articles: any[]=[];

  constructor(private newsService: NewsService, private navcontroller: NavController) {}

  ionViewDidEnter() {
    this.newsService.getTopSportsHeadlines().subscribe((data: any) => {
      this.articles = data.articles;
    });
  }
  openArticle(articleId: number) {
    this.navcontroller.navigateForward(`/tabs/sports/${articleId}`);
  }
}
