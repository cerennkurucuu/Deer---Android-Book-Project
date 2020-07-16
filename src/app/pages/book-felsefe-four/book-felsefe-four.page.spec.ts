import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookFelsefeFourPage } from './book-felsefe-four.page';

describe('BookFelsefeFourPage', () => {
  let component: BookFelsefeFourPage;
  let fixture: ComponentFixture<BookFelsefeFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFelsefeFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookFelsefeFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
