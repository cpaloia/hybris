import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IRepository} from './IRepository';

@Component({
    moduleId : module.id,
    selector : 'p-detail',
    templateUrl : 'product-detail.component.html'
})
export class ProductDetail implements OnInit{
    pageTitle : string ='Product Detail';
    product : IRepository;

    constructor(private _activatedRoute: ActivatedRoute,
                private _router : Router){

    }

    ngOnInit(): void {
        let url =  +this._activatedRoute.snapshot.params['url'];
        this.pageTitle += `: ${url}`;
    }

    onBack():void{
        this._router.navigate(['//hybris']);
    }
}