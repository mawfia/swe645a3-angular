import { TestBed } from '@angular/core/testing';

import { SurveyDetailResolverService } from './survey-detail-resolver.service';

describe('SurveyDetailResolverService', () => {
  let service: SurveyDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
