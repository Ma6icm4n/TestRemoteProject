import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//this methods are really specific to the third person project in unreal demos project 
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  //the url to get and set a property on an object in unreal is not the same be carefull to open your 8080 port on your application
  seturl: string = "http://localhost:8080/remote/object/call";
  geturl: string = "http://localhost:8080/remote/object/property";

//this function that is called in test-button component  is used to retrieve data from the color of the object
//the method put is the only one that is used in unreal
  setConfig() {
    return this.http.put(this.geturl, 
      {
        "objectPath" : "/Game/ThirdPersonBP/Maps/ThirdPersonExampleMap.ThirdPersonExampleMap:PersistentLevel.LightSource_0.LightComponent0",
        "access":"READ_ACCESS",
        "propertyName":"LightColor"

    });
  }
//this function is called in test-button component is used to change the color of the light object 
  getConfig () {
    return this.http.put(this.seturl, 
      {
        "objectPath" : "/Game/ThirdPersonBP/Maps/ThirdPersonExampleMap.ThirdPersonExampleMap:PersistentLevel.LightSource_0.LightComponent0",
        "functionName":"SetLightColor",
        "parameters": {
            "NewLightColor": {
                "R":90,
                "G":0,
                "B":0
            }
        },
        "generateTransaction":true

    });
  }
}
