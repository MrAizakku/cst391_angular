import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { fade } from '../animations';
import { Household } from '../models/household';
import { HouseholdServiceService } from '../service/household-service.service';

@Component({
  selector: 'app-create-household',
  templateUrl: './create-household.component.html',
  styleUrls: ['./create-household.component.css'],
  animations: [ fade ]
})
export class CreateHouseholdComponent implements OnInit {
  household:any;
  newForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl('')
  });

  prompt = "Create Household:";
  name:string = "";
  address:string = "";
  description:string = "";

  constructor(private service: HouseholdServiceService, private redirect: Router) {}

  ngOnInit(): void {
  }

  onSubmit(data:any) {
    this.service.createHousehold(new Household(-1, data.name, data.address, data.description, new Date().toDateString(), new Date().toDateString(), []), () => {
      this.redirect.navigate(['list/households']);
    });
  }
}
