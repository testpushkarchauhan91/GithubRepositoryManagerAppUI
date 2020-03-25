import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCopyrightsComponent } from './footer-copyrights.component';

describe('FooterCopyrightsComponent', () => {
  let component: FooterCopyrightsComponent;
  let fixture: ComponentFixture<FooterCopyrightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCopyrightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCopyrightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
