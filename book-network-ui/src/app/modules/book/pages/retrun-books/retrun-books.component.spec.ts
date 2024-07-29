import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrunBooksComponent } from './retrun-books.component';

describe('RetrunBooksComponent', () => {
  let component: RetrunBooksComponent;
  let fixture: ComponentFixture<RetrunBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrunBooksComponent]
    });
    fixture = TestBed.createComponent(RetrunBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
