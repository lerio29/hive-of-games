import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamGlobalComponentComponent } from './steam-global-component.component';

describe('SteamGlobalComponentComponent', () => {
  let component: SteamGlobalComponentComponent;
  let fixture: ComponentFixture<SteamGlobalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteamGlobalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamGlobalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
