import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscoposHistoricoComponent } from './horoscopos-historico.component';

describe('HoroscoposHistoricoComponent', () => {
  let component: HoroscoposHistoricoComponent;
  let fixture: ComponentFixture<HoroscoposHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoroscoposHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoroscoposHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
