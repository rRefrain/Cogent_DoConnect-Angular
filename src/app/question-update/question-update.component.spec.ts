import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionUpdateComponent } from './question-update.component';

describe('QuestionUpdateComponent', () => {
  let component: QuestionUpdateComponent;
  let fixture: ComponentFixture<QuestionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
