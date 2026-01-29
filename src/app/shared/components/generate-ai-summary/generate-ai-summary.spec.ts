import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAiSummary } from './generate-ai-summary';

describe('GenerateAiSummary', () => {
  let component: GenerateAiSummary;
  let fixture: ComponentFixture<GenerateAiSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateAiSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateAiSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
