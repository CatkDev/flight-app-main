import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FLIGHT } from '../flight';

@Component({
    selector: 'app-flight-card',
    templateUrl: './flight-card.component.html',
    styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

    @Input() item: FLIGHT | null = null;
    @Input() selected = false;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit(): void {
    }

    select(): void {
        this.selected = true;
        this.selectedChange.emit(true);
    }

    deselect(): void {
        this.selected = false;
        this.selectedChange.emit(false);
    }

}
