import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Household } from '../models/household';
import { HouseholdServiceService } from '../service/household-service.service';

@Component({
  selector: 'app-list-households',
  templateUrl: './list-households.component.html',
  styleUrls: ['./list-households.component.css']
})
export class ListHouseholdsComponent implements OnInit {
  selectedHousehold:any;
  households:any;
  constructor(private route: ActivatedRoute, private service: HouseholdServiceService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.service.getHouseholds( (households:Household[]) =>
      {
        this.households = households;
        this.selectedHousehold= null;
      });
    })
  }
  onSelectedHousehold(household: Household) {
    this.selectedHousehold = household;
  }

}
