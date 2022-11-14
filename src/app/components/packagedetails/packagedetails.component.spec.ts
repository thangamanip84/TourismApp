import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagedetailsComponent } from './packagedetails.component';

describe('PackagedetailsComponent', () => {
  let component: PackagedetailsComponent;
  let fixture: ComponentFixture<PackagedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
