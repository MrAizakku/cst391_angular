import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DTO } from '../models/dto';
import { Household } from '../models/household';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class HouseholdServiceService {
  //hostname: string = "http://localhost:3000";
  hostname: string = "https://cst391nodejs.herokuapp.com" 

  constructor(private http: HttpClient) { }

  getHouseholds(callback:any) {
    this.http.get<DTO>(this.hostname + "/households")
      .subscribe((data) =>
      {
        let households:Household[] = [];

        for(let x=0;x < data['data'].length;++x)
        {
          let items:Item[] = [];
          for(let y=0; y < data['data'][x]['items'].length; ++y)
          {
            items.push(new Item(data['data'][x]['items'][y]['id'],
                                data['data'][x]['items'][y]['name'],
                                data['data'][x]['items'][y]['description'],
                                data['data'][x]['items'][y]['quantity'],
                                data['data'][x]['items'][y]['households_id'],
                                data['data'][x]['items'][y]['created_at'],
                                data['data'][x]['items'][y]['updated_at']));
          }
          households.push(new Household(data['data'][x]['id'], 
                                          data['data'][x]['name'], 
                                          data['data'][x]['address'], 
                                          data['data'][x]['description'], 
                                          data['data'][x]['created_at'], 
                                          data['data'][x]['updated_at'], 
                                          items));
        }
        callback(households);
      });
  }

  getHousehold(id:number, callback:any) {    
    this.http.get<DTO>(this.hostname + "/households/" + id)
      .subscribe((data) =>
      {
        let items:Item[] = [];
        for(let x=0; x < data['data'][0]['items'].length; ++x)
        {
          items.push(new Item(data['data'][0]['items'][x]['id'],
                              data['data'][0]['items'][x]['name'],
                              data['data'][0]['items'][x]['description'],
                              data['data'][0]['items'][x]['quantity'],
                              data['data'][0]['items'][x]['households_id'],
                              data['data'][0]['items'][x]['created_at'],
                              data['data'][0]['items'][x]['updated_at']));
        }
        let returnHH = new Household(data['data'][0]['id'], 
        data['data'][0]['name'], 
        data['data'][0]['address'], 
        data['data'][0]['description'], 
        data['data'][0]['created_at'], 
        data['data'][0]['updated_at'], 
        items);
        callback(returnHH);
      });
  }
  //Route::post('/households', [HouseholdApiController::class, 'store']);
  createHousehold(household:Household, callback:any) {
    this.http.post<Household>(this.hostname + "/households", household)
      .subscribe((data) => 
      {
        callback(data);
      });
  }
  //Route::put('/households/{household}', [HouseholdApiController::class, 'update']);
  updateHousehold(household:Household, callback:any) {
    this.http.put<Household>(this.hostname + "/households/" + household.Id , household)
      .subscribe((data) => 
      {
        callback(data);
      });
  }
  //Route::delete('/households/{household}', [HouseholdApiController::class, 'destroy']);
  deleteHousehold(id:number, callback:any) {
    this.http.delete(this.hostname + "/households/" + id)
      .subscribe((data) => 
      {
        callback(data);
      });
  }
  
  //Route::get('/items', [ItemApiController::class, 'index']);
  getItems(callback:any) {
    this.http.get<DTO>(this.hostname + "/items")
      .subscribe((data) =>
      {
        let items:Item[] = [];
        for(let y=0; y < data['data']['items'].length; ++y)
        {
          items.push(new Item(data['data']['items'][y]['id'],
                              data['data']['items'][y]['name'],
                              data['data']['items'][y]['description'],
                              data['data']['items'][y]['quantity'],
                              data['data']['items'][y]['households_id'],
                              data['data']['items'][y]['created_at'],
                              data['data']['items'][y]['updated_at']));
        }
        callback(items);
      });
  }

  //Route::get('/items/{item}', [ItemApiController::class, 'isolateById']);
  getItem(id:number, callback:any) {
    this.http.get<DTO>(this.hostname + "/items/" + id)
      .subscribe((data) =>
      {
        let item = new Item(data['data'][0]['id'],
                            data['data'][0]['name'],
                            data['data'][0]['description'],
                            data['data'][0]['quantity'],
                            data['data'][0]['households_id'],
                            data['data'][0]['created_at'],
                            data['data'][0]['updated_at']);
        callback(item);
      });
  }

  //Route::get('/items/household/{hhid}', [ItemApiController::class, 'isolateByHhid']);
  getItemByHHID(id:number, callback:any) {
    this.http.get<DTO>(this.hostname + "/items/household/" + id)
      .subscribe((data) =>
      {
        let items:Item[] = [];
        for(let y=0; y < data['data']['items'].length; ++y)
        {
          items.push(new Item(data['data']['items'][y]['id'],
                              data['data']['items'][y]['name'],
                              data['data']['items'][y]['description'],
                              data['data']['items'][y]['quantity'],
                              data['data']['items'][y]['households_id'],
                              data['data']['items'][y]['created_at'],
                              data['data']['items'][y]['updated_at']));
        }
        callback(items);
      });
  }

  //Route::post('/items', [ItemApiController::class, 'store']);
  createItem(item:Item, callback:any) {
    this.http.post<Item>(this.hostname + "/items", item)
      .subscribe((data) => 
      {
        callback(data);
      });
  }

  //Route::put('/items/{item}', [ItemApiController::class, 'update']);
  updateItem(item:Item, callback:any) {
    this.http.put<Item>(this.hostname + "/items/" + item.Id , item)
      .subscribe((data) => 
      {
        callback(data);
      });
  }

  //Route::delete('/items/{item}', [ItemApiController::class, 'destroy']);
  deleteItem(id:number, callback:any) {
    this.http.delete(this.hostname + "/items/" + id)
      .subscribe((data) => 
      {
        callback(data);
      });
  }
}
