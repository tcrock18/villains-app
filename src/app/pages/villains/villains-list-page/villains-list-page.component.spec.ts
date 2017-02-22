import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsListPageComponent } from './villains-list-page.component';

describe('VillainsListPageComponent', () => {
  let component: VillainsListPageComponent;
  let fixture: ComponentFixture<VillainsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
