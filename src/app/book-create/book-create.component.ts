import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})

export class BookCreateComponent implements OnInit {

  productForm: FormGroup;
  sku: string = '';
  title: string = '';
  description: string = '';
  model: string = '';
  color: string = '';
  price: String = '';
  coupon: String = '';
  small: number = 0;
  medium: number = 0;
  large: number = 0;
  xlarge: number = 0;
  matcher: any;
  public imageList: any = [];

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'sku': [null, Validators.required],
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'model': [null, Validators.required],
      'color': [null, Validators.required],
      'price': [null, Validators.required],
      'coupon': [null, Validators.required],
      'small': [null, Validators.required],
      'medium': [null, Validators.required],
      'large': [null, Validators.required],
      'xlarge': [null, Validators.required]
    });
  }

  checkProperties(obj) {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != "")
        return false;
    }
    return true;
  }

  onFormSubmit(form: any) {
    const flag = this.checkProperties(form);
    if (flag) return;
    form.images = this.imageList;
    this.api.postProduct(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/product-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

  changeInModelValue(value, index) {
    this.imageList[index].image = value;
  }

  addNewImage() {
    this.imageList.push({
      image: ''
    });
  }
}
