import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookAskThreePage } from './book-ask-three.page';

describe('BookAskThreePage', () => {
  let component: BookAskThreePage;
  let fixture: ComponentFixture<BookAskThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAskThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookAskThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
