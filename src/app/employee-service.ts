import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  getEmployeeDetails(empId: number): Observable<any> {


   const mockJson = {

            employeeAttributes: 'A bunch of employee related attributes',
            knowledgePreviousRating: 8,
            knowledgeCurrentRating: 10,
            courtesyPreviousRating: 12,
            courtesyCurrentRating: 12,
            speedPreviousRating: 7,
            speedCurrentRating: 5

   };
   return of(mockJson);
  }



}

