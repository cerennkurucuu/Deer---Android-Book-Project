import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookFelsefeThreePage } from './book-felsefe-three.page';

describe('BookFelsefeThreePage', () => {
  let component: BookFelsefeThreePage;
  let fixture: ComponentFixture<BookFelsefeThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFelsefeThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookFelsefeThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
