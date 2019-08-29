import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeManagerComponent } from './cake-manager.component';

describe('CakeManagerComponent', () => {
  let component: CakeManagerComponent;
  let fixture: ComponentFixture<CakeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
