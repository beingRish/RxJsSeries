import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { Search } from 'src/app/appInterface/search.interface';
import { SearchService } from 'src/app/appServices/search.service';

@Component({
  selector: 'app-search-functionalityusing-switchmap',
  templateUrl: './search-functionalityusing-switchmap.component.html',
  styleUrls: ['./search-functionalityusing-switchmap.component.scss']
})
export class SearchFunctionalityusingSwitchmapComponent implements AfterViewInit{

  @ViewChild('searchForm') searchForm : NgForm | undefined;
  searchResults : Search[] = [];
  searchResultCount: number = 0;

  constructor(private _searchService: SearchService) {}

  ngAfterViewInit(): void {
    
    const formValue = this.searchForm?.valueChanges;

    formValue?.pipe(
      // map(data => data['searchTerm'])
      filter(() => this.searchForm?.valid === true),
      pluck('searchTerm'),      
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this._searchService.getSearches(data))
    ).subscribe(res => {
      this.searchResults = res;

      console.log(this.searchResults);
      this.searchResultCount = Object.keys(res).length
      
    })
    
  }

}
