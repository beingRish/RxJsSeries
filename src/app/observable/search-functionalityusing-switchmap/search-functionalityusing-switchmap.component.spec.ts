import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFunctionalityusingSwitchmapComponent } from './search-functionalityusing-switchmap.component';

describe('SearchFunctionalityusingSwitchmapComponent', () => {
  let component: SearchFunctionalityusingSwitchmapComponent;
  let fixture: ComponentFixture<SearchFunctionalityusingSwitchmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFunctionalityusingSwitchmapComponent]
    });
    fixture = TestBed.createComponent(SearchFunctionalityusingSwitchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
