import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookAskTwoPage } from './book-ask-two.page';

describe('BookAskTwoPage', () => {
  let component: BookAskTwoPage;
  let fixture: ComponentFixture<BookAskTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAskTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookAskTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
