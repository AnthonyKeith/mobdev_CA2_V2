import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsarticlePage } from './newsarticle.page';

describe('NewsarticlePage', () => {
  let component: NewsarticlePage;
  let fixture: ComponentFixture<NewsarticlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsarticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
