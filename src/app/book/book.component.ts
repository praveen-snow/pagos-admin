import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  products: any;
  displayedColumns = ['sku', 'title', 'model', 'material'];
  dataSource = new BookDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts()
      .subscribe(res => {
        console.log(res);
        this.products = res;
      }, err => {
        console.log(err);
      });
  }
}

export class BookDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getProducts();
  }

  disconnect() {

  }
}
