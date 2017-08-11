import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePiePaginaComponent } from './home-pie-pagina.component';

describe('HomePiePaginaComponent', () => {
  let component: HomePiePaginaComponent;
  let fixture: ComponentFixture<HomePiePaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePiePaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePiePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
