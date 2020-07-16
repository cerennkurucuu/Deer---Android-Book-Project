import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookKisiselgelisimThreePage } from './book-kisiselgelisim-three.page';

describe('BookKisiselgelisimThreePage', () => {
  let component: BookKisiselgelisimThreePage;
  let fixture: ComponentFixture<BookKisiselgelisimThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookKisiselgelisimThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookKisiselgelisimThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
