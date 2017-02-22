import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsNewPageComponent } from './villains-new-page.component';

describe('VillainsNewPageComponent', () => {
  let component: VillainsNewPageComponent;
  let fixture: ComponentFixture<VillainsNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainsNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainsNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
