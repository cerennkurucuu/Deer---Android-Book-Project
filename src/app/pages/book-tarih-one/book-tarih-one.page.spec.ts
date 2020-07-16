import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookTarihOnePage } from './book-tarih-one.page';

describe('BookTarihOnePage', () => {
  let component: BookTarihOnePage;
  let fixture: ComponentFixture<BookTarihOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTarihOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookTarihOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
