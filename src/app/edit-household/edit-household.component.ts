import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Household } from '../models/household';
import { HouseholdServiceService } from '../service/household-service.service';

@Component({
  selector: 'app-edit-household',
  templateUrl: './edit-household.component.html',
  styleUrls: ['./edit-household.component.css']
})
export class EditHouseholdComponent implements OnInit {
  household:any;

  newForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl('')
  });

  prompt = "Edit Household:";
  name:string = "";
  address:string = "";
  description:string = "";

  constructor(private service: HouseholdServiceService, private redirect: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.household = this.service.getHousehold(params['id'], (hh: Household) => {   
        this.household = hh;
      });
    })
  }

  onSubmit(data:any) {
    this.service.updateHousehold(new Household(
      data.id, 
      data.name, 
      data.address, 
      data.description,
      data.created_at, 
      new Date().toDateString(), 
      data.items), 
      () => {
        this.redirect.navigate(['list/households']);
      }
    );
  }

}
