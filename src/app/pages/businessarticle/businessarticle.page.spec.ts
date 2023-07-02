import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessarticlePage } from './businessarticle.page';

describe('BusinessarticlePage', () => {
  let component: BusinessarticlePage;
  let fixture: ComponentFixture<BusinessarticlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusinessarticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
