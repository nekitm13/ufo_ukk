import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VSOHComponent } from './vsoh.component';

describe('VSOHComponent', () => {
  let component: VSOHComponent;
  let fixture: ComponentFixture<VSOHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VSOHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VSOHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
