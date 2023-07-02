import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-businessarticle',
  templateUrl: './businessarticle.page.html',
  styleUrls: ['./businessarticle.page.scss'],
})
export class BusinessarticlePage implements OnInit {
  article: any;
  articleId = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

  }
}
