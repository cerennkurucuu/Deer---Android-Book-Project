import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookCocukTwoPage } from './book-cocuk-two.page';

describe('BookCocukTwoPage', () => {
  let component: BookCocukTwoPage;
  let fixture: ComponentFixture<BookCocukTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCocukTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookCocukTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
