import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsDeleteVillainPageComponent } from './villains-delete-villain-page.component';

describe('VillainsDeleteVillainPageComponent', () => {
  let component: VillainsDeleteVillainPageComponent;
  let fixture: ComponentFixture<VillainsDeleteVillainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainsDeleteVillainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainsDeleteVillainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
