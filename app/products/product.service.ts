import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { IRepository } from './IRepository';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
    public sortBy="full_name";
    public userName = "hybris";
    private repositoryUrl: string = 'https://api.github.com/users/' + this.userName + '/repos?sort=' + this.sortBy;
    constructor(private _http: Http){

    }
    getRepository(): Observable<IRepository[]> {
        return this._http.get(this.repositoryUrl)
                .map((response: Response)=> <IRepository[]>response.json())
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }
    getRepositoryByName(userName:string, sort: string): Observable<IRepository[]> {
        let newUrl = 'https://api.github.com/users/' + userName + '/repos?sort=' + sort;
        return this._http.get(newUrl)
                .map((response: Response)=> <IRepository[]>response.json())
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

}