import { Component, OnInit } from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faArrowDown, faMinus, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-ratings-by-val',
  templateUrl: './ratings-by-val.component.html',
  styleUrls: ['./ratings-by-val.component.scss']
})
export class RatingsByValComponent implements OnInit {


  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faMinus = faMinus;

  employeeAttributes: string;

  knowledgePreviousRating: number;
  knowledgeCurrentRating: number;
  faKnowledge = faMinus; // set to minus for now, will be changed when data is loaded
  knowledgeClass = 'fa-hide'; 

  courtesyPreviousRating: number;
  courtesyCurrentRating: number;
  faCourtesy = faMinus; // set to minus for now, will be changed when data is loaded
  courtesyClass = 'fa-hide'; 

  speedPreviousRating: number;
  speedCurrentRating: number;
  faSpeed = faMinus; // set to minus for now, will be changed when data is loaded
  speedClass = 'fa-hide'; 


  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {

    this._employeeService.getEmployeeDetails(1234).subscribe((data) =>{

      this.employeeAttributes = data['employeeAttributes'];
      this.knowledgePreviousRating = data['knowledgePreviousRating'];
      this.knowledgeCurrentRating = data['knowledgeCurrentRating'];
      this.courtesyPreviousRating = data['courtesyPreviousRating'];
      this.courtesyCurrentRating = data['courtesyCurrentRating'];
      this.speedPreviousRating = data['speedPreviousRating'];
      this.speedCurrentRating = data['speedCurrentRating'];

      this.assignIcons();

      // this.makeIconUpArrow(this.faKnowledge);
      // this.makeIconUpArrow(this.faCourtesy);
      // this.makeIconUpArrow(this.faSpeed);


    });
  }

  assignIcons(): void {

    this.knowledgeClass = 'fa-display';

    if ((this.knowledgePreviousRating == null) || (this.knowledgeCurrentRating == null))
     {
      this.knowledgeClass = 'fa-hide'
    } else if (this.knowledgePreviousRating > this.knowledgeCurrentRating) {
      this.faKnowledge = faArrowDown;
    } else if (this.knowledgePreviousRating < this.knowledgeCurrentRating) {
      this.faKnowledge = faArrowUp;
    } else if (this.knowledgePreviousRating === this.knowledgeCurrentRating) {
      this.faKnowledge = faMinus;
    }

    this.courtesyClass = 'fa-display';

    if ((this.courtesyPreviousRating == null) || (this.courtesyCurrentRating == null))
     {
      this.courtesyClass = 'fa-hide'
    } else if (this.courtesyPreviousRating > this.courtesyCurrentRating) {
      this.faCourtesy = faArrowDown;
    } else if (this.courtesyPreviousRating < this.courtesyCurrentRating) {
      this.faCourtesy = faArrowUp;
    } else if (this.courtesyPreviousRating === this.courtesyCurrentRating) {
      this.faCourtesy = faMinus;
    }

    this.speedClass = 'fa-display';

    if ((this.speedPreviousRating == null) || (this.speedCurrentRating == null))
     {
      this.speedClass = 'fa-hide'
    } else if (this.speedPreviousRating > this.speedCurrentRating) {
      this.faSpeed = faArrowDown;
    } else if (this.speedPreviousRating < this.speedCurrentRating) {
      this.faSpeed = faArrowUp;
    } else if (this.speedPreviousRating === this.speedCurrentRating) {
      this.faSpeed = faMinus;
    }
    

}

makeIconUpArrow(icon: IconDefinition): IconDefinition {
  icon = faArrowUp;
  return icon;
}

}
