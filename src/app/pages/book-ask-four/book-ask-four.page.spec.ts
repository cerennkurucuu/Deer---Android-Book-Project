import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookAskFourPage } from './book-ask-four.page';

describe('BookAskFourPage', () => {
  let component: BookAskFourPage;
  let fixture: ComponentFixture<BookAskFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAskFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookAskFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
