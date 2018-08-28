import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { Http, Response, Headers, URLSearchParams, RequestOptions, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Mymod } from './mymod.model';
import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent,
    PageChangeEvent
  } from '@progress/kendo-angular-grid';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

@Injectable()
export class EditService  {

    public loading: boolean;
    private data: any;

    private articleUrl = 'http://localhost:3000/articles';

    constructor(private http: HttpClient) {

    }



    public getAllArticles() {
        this.loading = true;
        return this.http.get(this.articleUrl);

    }


}
