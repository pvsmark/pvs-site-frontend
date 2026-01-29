import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCuztomizableReport } from './create-cuztomizable-report';

describe('CreateCuztomizableReport', () => {
  let component: CreateCuztomizableReport;
  let fixture: ComponentFixture<CreateCuztomizableReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCuztomizableReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCuztomizableReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
