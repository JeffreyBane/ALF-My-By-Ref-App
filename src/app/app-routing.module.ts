import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingsByRefComponent } from './ratings-by-ref/ratings-by-ref.component';
import { RatingsByValComponent } from './ratings-by-val/ratings-by-val.component';

const routes: Routes = [
  {

    path: 'RatingsByVal',
    // component: EmployeeNestedComponent
    component: RatingsByValComponent
  },
  {

    path: 'RatingsByRef',
    // component: EmployeeNestedComponent
    component: RatingsByRefComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
