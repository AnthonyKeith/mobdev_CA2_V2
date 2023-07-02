import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sportsarticle',
  templateUrl: './sportsarticle.page.html',
  styleUrls: ['./sportsarticle.page.scss'],
})
export class SportsarticlePage implements OnInit {
  article: any;
  articleId = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

  }
}
