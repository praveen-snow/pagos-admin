import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  product: any = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params['id']);
  }

  getProductDetails(id) {
    this.api.getProduct(id)
      .subscribe(data => {
        console.log(data);
        this.product = data;
      });
  }

  deleteProduct(id) {
    this.api.deleteProduct(id)
      .subscribe(res => {
          this.router.navigate(['/products']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
