import { Component, OnInit, Injectable } from '@angular/core';
import * as actionTypes from './types'
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "./index";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class ContactActions {

  constructor(private ngRedux: NgRedux<IAppState>, private http: HttpClient) {}

  postMessage = (data, callback) => {

    return this.http.post('', data).subscribe(async res => {
      await this.ngRedux.dispatch({
        payload: data,
        type: actionTypes.POST_MESSAGE
      })
      callback()
    }, async error => {
      await this.ngRedux.dispatch({
        payload: data,
        type: actionTypes.POST_MESSAGE
      })
      callback()
    })
  }

  // ngOnInit() {}
}