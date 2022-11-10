import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscoposMensualComponent } from './horoscopos-mensual.component';

describe('HoroscoposMensualComponent', () => {
  let component: HoroscoposMensualComponent;
  let fixture: ComponentFixture<HoroscoposMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoroscoposMensualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoroscoposMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
