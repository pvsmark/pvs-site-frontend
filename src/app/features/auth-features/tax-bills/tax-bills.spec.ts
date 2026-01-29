import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxBills } from './tax-bills';

describe('TaxBills', () => {
  let component: TaxBills;
  let fixture: ComponentFixture<TaxBills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxBills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxBills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
