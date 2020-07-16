import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookAskOnePage } from './book-ask-one.page';

describe('BookAskOnePage', () => {
  let component: BookAskOnePage;
  let fixture: ComponentFixture<BookAskOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAskOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookAskOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
