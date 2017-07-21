import {Component, OnChanges, Input,
     Output, EventEmitter} from '@angular/core';

@Component({
    templateUrl: 'star.component.html',
    styleUrls : ['star.component.css'],
    selector: 'ai-star',
    moduleId: module.id
})
export class StarComponent implements OnChanges{
    starWidth : number;
    @Input() rating: number = 4;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();
    ngOnChanges():void{
        this.starWidth = this.rating * 86/5;
    }

    onClick():void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}