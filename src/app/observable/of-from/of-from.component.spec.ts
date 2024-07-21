import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DeisgnUtilityService } from 'src/app/appServices/deisgn-utility.service';
import { OfFromComponent } from './of-from.component';
import { HttpClientModule } from '@angular/common/http';

fdescribe('OfFromComponent', () => {
  let component: OfFromComponent;
  let fixture: ComponentFixture<OfFromComponent>;
  let DeisgnUtilityService: jasmine.SpyObj<DeisgnUtilityService>

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('DeisgnUtilityService', ['print']);

    TestBed.configureTestingModule({
      declarations: [OfFromComponent],
      imports: [HttpClientModule],
      providers: [
        {provide: DeisgnUtilityService, useValue: spy}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(OfFromComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call print method with "Rishabh", "Ritik", "Vishwjeet" for Obs1', () => {
    fixture.detectChanges();
    expect(DeisgnUtilityService.print).toHaveBeenCalledWith('Rishabh', 'elContainer');
    expect(DeisgnUtilityService.print).toHaveBeenCalledWith('Ritik', 'elContainer');
    expect(DeisgnUtilityService.print).toHaveBeenCalledWith('Vishwjeet', 'elContainer');
  
  })
});
