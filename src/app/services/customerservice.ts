import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/assets/domain/customer';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) { }

    getCustomersMedium() {
        return this.http.get<any>('assets/data/customers-medium.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

}