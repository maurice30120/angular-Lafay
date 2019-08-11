import { TestBed } from '@angular/core/testing';

import { TimerManagerService } from './timer-manager.service';

describe('TimerManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimerManagerService = TestBed.get(TimerManagerService);
    expect(service).toBeTruthy();
  });

  // Straight Jasmine testing without Angular's testing support
  describe('ValueService', () => {
    let service: TimerManagerService;
    beforeEach(() => {  service  = TestBed.get(TimerManagerService) ; });

    it('#getValue should return 30 Second', () => {
      const deadLine = new Date();
      deadLine.setSeconds(deadLine.getSeconds() + 30);
      expect(service.getTimeRemaining(deadLine)).toBe('30');
    });

    // it('#getObservableValue should return value from observable',
    //   (done: DoneFn) => {
    //     service.getObservableValue().subscribe(value => {
    //       expect(value).toBe('observable value');
    //       done();
    //     });
    //   });

 
  });





});
