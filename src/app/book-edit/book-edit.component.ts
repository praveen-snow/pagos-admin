import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  id:string = '';
  productForm: FormGroup;
  sku: string = '';
  title: string = '';
  description: string = '';
  model: string = '';
  color: string = '';
  price: String = '';
  coupon: String = '';
  small: string = '';
  medium: string = '';
  large: string = '';
  xlarge: string = '';
  matcher: any;
  inventory: any = [];
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
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

  getProduct(id) {
    this.api.getProduct(id).subscribe(data => {
      this.id = data._id;
      this.imageList = data.images;
      this.productForm.setValue({
        sku: data.sku,
        title: data.title,
        description: data.description,
        model: data.model,
        color: data.color,
        price: data.price,
        coupon: data.coupon,
        small: data.small,
        medium: data.medium,
        large: data.large,
        xlarge: data.xlarge
      });
    });
  }

  onFormSubmit(form:any) {
    form.images = this.imageList;
    this.api.updateProduct(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  imageList: any = [];

  changeInModelValue(value, index) {
    this.imageList[index].image = value;
  }

  deleteImage(imageIndex){
    this.imageList.splice(imageIndex, 1) 
  }

  addNewImage() {
    this.imageList.push({
      image: ''
    });
  }

  productDetails() {
    this.router.navigate(['/product-details', this.id]);
  }
}
