import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

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
  material: string = '';
  color: string = '';
  price: String = '';
  coupon: String = '';
  matcher: any;
  private base64textString: String = "";
  public imageList: any = [];

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'sku': [null, Validators.required],
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'model': [null, Validators.required],
      'material': [null, Validators.required],
      'color': [null, Validators.required],
      'price': [null, Validators.required],
      'coupon': [null, Validators.required]
    });
  }



  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.imageList.push({image:this.base64textString});
    // console.log(btoa(binaryString));
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
    if(flag) return;
    form.images = this.imageList;
    this.api.postProduct(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/product-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
}
