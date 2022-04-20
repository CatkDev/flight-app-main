import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FLIGHT} from './flight';
import {DummyFlightService} from './dummy-flight.service';

@Injectable({
    providedIn: 'root',
    useClass: DummyFlightService
})
export abstract class FlightService {

    constructor() {
    }

    abstract find(from: string, to: string): Observable<FLIGHT[]>;

}
