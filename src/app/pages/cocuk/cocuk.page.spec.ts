import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CocukPage } from './cocuk.page';

describe('CocukPage', () => {
  let component: CocukPage;
  let fixture: ComponentFixture<CocukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocukPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CocukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
