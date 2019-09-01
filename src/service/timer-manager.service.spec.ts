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

    it('compte 30 second', () => {
      const deadLine = new Date();
      deadLine.setSeconds(deadLine.getSeconds() + 31);
      service.setTargetTime(deadLine).subscribe(val => expect(val).toBe(0));
    });

  });





});
