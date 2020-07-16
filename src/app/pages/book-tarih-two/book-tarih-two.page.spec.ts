import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookTarihTwoPage } from './book-tarih-two.page';

describe('BookTarihTwoPage', () => {
  let component: BookTarihTwoPage;
  let fixture: ComponentFixture<BookTarihTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTarihTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookTarihTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
