import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookCocukOnePage } from './book-cocuk-one.page';

describe('BookCocukOnePage', () => {
  let component: BookCocukOnePage;
  let fixture: ComponentFixture<BookCocukOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCocukOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookCocukOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
