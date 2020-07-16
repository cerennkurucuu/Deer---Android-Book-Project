import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookTarihFourPage } from './book-tarih-four.page';

describe('BookTarihFourPage', () => {
  let component: BookTarihFourPage;
  let fixture: ComponentFixture<BookTarihFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTarihFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookTarihFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
