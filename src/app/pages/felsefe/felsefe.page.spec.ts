import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FelsefePage } from './felsefe.page';

describe('FelsefePage', () => {
  let component: FelsefePage;
  let fixture: ComponentFixture<FelsefePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelsefePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FelsefePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
