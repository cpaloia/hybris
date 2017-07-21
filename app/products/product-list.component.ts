import {Component, OnInit} from '@angular/core';
import{IRepository} from './IRepository';
import {ProductService} from './product.service';

@Component({
    selector:'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls : ['product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Hybris Repository List!';
    imageWidth: number = 50;
    imageMargin : number = 2;
    showImage : boolean= false;
    listFilter: string = '';
    products: IRepository[];
    sortBy:string = 'full_name';
    userName:string = 'hybris';
    errorMessage: string;
    constructor(private _productService : ProductService){

    }
    toggleImage(): void{
        this.showImage =!this.showImage;
    }
    ngOnInit() : void {
        console.log('In OnInit');
        this._productService.getRepository()
                .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Repository List: ' + message;
    }
    updateRepository(){
        this._productService.getRepositoryByName(this.userName, this.sortBy)
                .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);
    }

}