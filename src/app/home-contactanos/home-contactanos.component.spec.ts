import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactanosComponent } from './home-contactanos.component';

describe('HomeContactanosComponent', () => {
  let component: HomeContactanosComponent;
  let fixture: ComponentFixture<HomeContactanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContactanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
