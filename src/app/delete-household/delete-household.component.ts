import { Component, OnInit } from '@angular/core';
import { HouseholdServiceService } from '../service/household-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-household',
  templateUrl: './delete-household.component.html',
  styleUrls: ['./delete-household.component.css']
})
export class DeleteHouseholdComponent implements OnInit {

  constructor(private service: HouseholdServiceService, private redirect: Router, private Router: ActivatedRoute) {}

  ngOnInit(): void {
    if(confirm('Are you sure you want to delete?')) {
      this.Router.params.subscribe(params => {
        this.service.deleteHousehold(params['id'], () => {
          this.redirect.navigate(['list/households'], { queryParams: { data: new Date()} });
        })
      });
    }
  }

}
