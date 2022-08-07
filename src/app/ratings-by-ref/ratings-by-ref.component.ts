import { Component, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from '../employee-service';
import { RatingItem } from '../rating-item';

@Component({
  selector: 'app-ratings-by-ref',
  templateUrl: './ratings-by-ref.component.html',
  styleUrls: ['./ratings-by-ref.component.scss']
})
export class RatingsByRefComponent implements OnInit {


  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faMinus = faMinus;

  employeeAttributes: string;

  ratingGroup: RatingItem[] = [];


  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {

    this._employeeService.getEmployeeDetails(1234).subscribe((data) => {

      const riKnowledge: RatingItem = {
        ratingName: 'Knowledge',
        previousRating: data['knowledgePreviousRating'],
        currentRating: data['knowledgeCurrentRating'],
        icon: faMinus,
        class: 'fa-hide'
      };

      const riCourtesy: RatingItem = {
        ratingName: 'Courtesy',
        previousRating: data['courtesyPreviousRating'],
        currentRating: data['courtesyCurrentRating'],
        icon: faMinus,
        class: 'fa-hide'
      };

      const riSpeed: RatingItem = {
        ratingName: 'Speed',
        previousRating: data['speedPreviousRating'],
        currentRating: data['speedCurrentRating'],
        icon: faMinus,
        class: 'fa-hide'
      };

      this.ratingGroup.push(riKnowledge);
      this.ratingGroup.push(riCourtesy);
      this.ratingGroup.push(riSpeed);


      this.assignIcons(this.ratingGroup);



    });
  }



  assignIcons(rg: RatingItem[]): void {
    

       rg.forEach(item => {
  
          item['class'] = 'fa-display';

          if ((item['previousRating'] == null) || (item['currentRating'] == null))
          {
            item['class']= 'fa-hide';
          } else if (item['previousRating'] > item['currentRating']) {
            item['icon'] = faArrowDown;
          } else if (item['previousRating'] < item['currentRating']) {
            item['icon'] = faArrowUp;
          } else if (item['previousRating'] === item['currentRating']) {
            item['icon'] = faMinus;
          }
    
        });

  }



}


