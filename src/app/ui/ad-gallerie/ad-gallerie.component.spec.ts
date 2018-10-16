import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdGallerieComponent } from './ad-gallerie.component';

describe('AdGallerieComponent', () => {
  let component: AdGallerieComponent;
  let fixture: ComponentFixture<AdGallerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdGallerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdGallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
