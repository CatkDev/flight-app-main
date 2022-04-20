import { Component, OnInit } from '@angular/core';
import { FLIGHT } from '../flight';
import { FlightService } from '../flight.service';

@Component({
    selector: 'app-flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

    from = 'Hamburg';
    to = 'Graz';
    date: string = (new Date()).toISOString();
    flights: Array<FLIGHT> = [];
    selectedFlight: FLIGHT | null = null;

    basket: { [key: number]: boolean } = {
        3: true,
        5: true
    };

    constructor(private fs: FlightService) {
    }

    ngOnInit(): void {
    }

    search(): void {

        this.fs.find(this.from, this.to).subscribe({
            next: (flights) => {
                this.flights = flights;
            },
            error: (err) => {
                console.log('Error', err);
            }
        });
    }

    select(f: FLIGHT): void {
        this.selectedFlight = f;
    }

}
