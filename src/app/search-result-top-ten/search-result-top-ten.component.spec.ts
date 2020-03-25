import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTopTenComponent } from './search-result-top-ten.component';

describe('SearchResultTopTenComponent', () => {
  let component: SearchResultTopTenComponent;
  let fixture: ComponentFixture<SearchResultTopTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultTopTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTopTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
