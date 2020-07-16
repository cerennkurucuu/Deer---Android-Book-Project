import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookKisiselgelisimTwoPage } from './book-kisiselgelisim-two.page';

describe('BookKisiselgelisimTwoPage', () => {
  let component: BookKisiselgelisimTwoPage;
  let fixture: ComponentFixture<BookKisiselgelisimTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookKisiselgelisimTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookKisiselgelisimTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
