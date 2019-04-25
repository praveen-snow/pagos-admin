import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from "@angular/material";
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { JwtInterceptorProvider } from './jwt-interceptor';
import { ApiService } from './api.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: AdminLoginComponent,
    data: { title: 'Admin Login' }
  }, 
  {
    path: 'products',
    component: BookComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'product-details/:id',
    component: BookDetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'product-create',
    component: BookCreateComponent,
    data: { title: 'Create Product' }
  },
  {
    path: 'product-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Product' }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    AdminLoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [JwtInterceptorProvider,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
