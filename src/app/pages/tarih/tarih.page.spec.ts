import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarihPage } from './tarih.page';

describe('TarihPage', () => {
  let component: TarihPage;
  let fixture: ComponentFixture<TarihPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarihPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarihPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
