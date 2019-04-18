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

  productForm: FormGroup;
  id:string = '';
  sku:string='';
  title:string='';
  description:string='';
  model:string='';
  material:string='';
  color:string='';
  price: String='';
  coupon: String='';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      'sku' : [null, Validators.required],
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'model' : [null, Validators.required],
      'material' : [null, Validators.required],
      'color' : [null, Validators.required],
      'price' : [null, Validators.required],
      'coupon' : [null, Validators.required]
    });
  }

  getProduct(id) {
    this.api.getProduct(id).subscribe(data => {
      this.id = data._id;
      this.productForm.setValue({
        sku: data.sku,
        title: data.title,
        description: data.description,
        model: data.model,
        material: data.material,
        color: data.color,
        price: data.price,
        coupon: data.coupon
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateProduct(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  productDetails() {
    this.router.navigate(['/product-details', this.id]);
  }
}
