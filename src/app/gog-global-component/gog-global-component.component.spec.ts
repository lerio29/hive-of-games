import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GogGlobalComponentComponent } from './gog-global-component.component';

describe('GogGlobalComponentComponent', () => {
  let component: GogGlobalComponentComponent;
  let fixture: ComponentFixture<GogGlobalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GogGlobalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GogGlobalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
