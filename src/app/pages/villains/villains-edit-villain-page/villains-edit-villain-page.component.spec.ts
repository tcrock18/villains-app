import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsEditVillainPageComponent } from './villains-edit-villain-page.component';

describe('VillainsEditVillainPageComponent', () => {
  let component: VillainsEditVillainPageComponent;
  let fixture: ComponentFixture<VillainsEditVillainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainsEditVillainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainsEditVillainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
