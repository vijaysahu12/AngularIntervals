import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DatePipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private IsMinutesDivisibleOfTwo = new BehaviorSubject(null);
    currentStatus = this.IsMinutesDivisibleOfTwo.asObservable();
    constructor(private datePipe: DatePipe) { }

    CheckMinutesAreDivisibleOfTwo() {
        return this.IsMinutesDivisibleOfTwo.next( parseInt((this.datePipe.transform(new Date(), 'mm')) , 8 )   % 2 === 0 ? true : false);
    }
}
