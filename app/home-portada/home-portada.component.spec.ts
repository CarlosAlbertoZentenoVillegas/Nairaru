import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortadaComponent } from './home-portada.component';

describe('HomePortadaComponent', () => {
  let component: HomePortadaComponent;
  let fixture: ComponentFixture<HomePortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
