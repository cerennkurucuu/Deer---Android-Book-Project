import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookTarihThreePage } from './book-tarih-three.page';

describe('BookTarihThreePage', () => {
  let component: BookTarihThreePage;
  let fixture: ComponentFixture<BookTarihThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTarihThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookTarihThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
