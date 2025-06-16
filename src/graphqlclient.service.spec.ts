import { TestBed } from '@angular/core/testing';

import { GraphqlclientService } from './graphqlclient.service';

describe('GraphqlclientService', () => {
  let service: GraphqlclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
