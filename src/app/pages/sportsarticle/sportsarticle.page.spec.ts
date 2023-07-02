import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportsarticlePage } from './sportsarticle.page';

describe('SportsarticlePage', () => {
  let component: SportsarticlePage;
  let fixture: ComponentFixture<SportsarticlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SportsarticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
