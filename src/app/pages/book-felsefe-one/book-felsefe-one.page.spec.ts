import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookFelsefeOnePage } from './book-felsefe-one.page';

describe('BookFelsefeOnePage', () => {
  let component: BookFelsefeOnePage;
  let fixture: ComponentFixture<BookFelsefeOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFelsefeOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookFelsefeOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
