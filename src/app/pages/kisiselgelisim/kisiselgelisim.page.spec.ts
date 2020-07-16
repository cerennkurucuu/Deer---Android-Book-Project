import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KisiselgelisimPage } from './kisiselgelisim.page';

describe('KisiselgelisimPage', () => {
  let component: KisiselgelisimPage;
  let fixture: ComponentFixture<KisiselgelisimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KisiselgelisimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KisiselgelisimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
