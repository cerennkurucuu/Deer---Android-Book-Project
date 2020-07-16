import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookFelsefeTwoPage } from './book-felsefe-two.page';

describe('BookFelsefeTwoPage', () => {
  let component: BookFelsefeTwoPage;
  let fixture: ComponentFixture<BookFelsefeTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFelsefeTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookFelsefeTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
