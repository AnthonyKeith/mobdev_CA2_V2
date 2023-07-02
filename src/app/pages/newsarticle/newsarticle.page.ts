import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsarticle',
  templateUrl: './newsarticle.page.html',
  styleUrls: ['./newsarticle.page.scss'],
})
export class NewsarticlePage implements OnInit {
  article: any;
  articleId = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

  }
}
