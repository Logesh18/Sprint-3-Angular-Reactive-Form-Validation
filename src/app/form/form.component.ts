import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,ValidationErrors,Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  public reactiveForm: FormGroup;
    readonly places = [
                                {country: 'Canada', cities: ['Calgary', 'Montreal', 'Ottawa', 'Quebec City', 'Vancouver']},
                                {country: 'Germany', cities: ['Berlin', 'Dresden', 'Erfurt', 'Hamburg', 'Stuttgart']},
                                {country: 'India', cities: ['Bangalore', 'Chennai', 'Delhi', 'Hyderabad', 'Kolkata', 'Mumbai']},
                                {country: 'Japan', cities: [' Hiroshima', 'Kyoto', 'Nagoya', 'Sapporo', 'Tokyo' ]},
                                {country: 'US', cities: ['Chicago', 'Houston', 'Los Angeles', 'New York', 'Washington']},
                                {country: 'UK', cities:['Bristol', 'Canterbury', 'Durham', 'London', 'Salisbury']} 
                            ]; 
    selects: string[];
    err=false;
    constructor(private fb: FormBuilder) {
       this.reactiveForm = this.fb.group({
          name : new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(50),Validators.pattern('^[a-zA-Z]+$')]),
          gender : new FormControl('',[Validators.required]),
          location: this.fb.group({
                country : new FormControl('',[Validators.required]),
                city: new FormControl('',[Validators.required]),
          }),   
          age : new FormControl('',[Validators.required])
      });  
      this.selects=[];   
    }

    ngOnInit(): void {}

    onSubmit() {
           console.warn(this.reactiveForm.value.name);
    }
    get name(){
      return this.reactiveForm.get('name');
    }
    get gender(){
      return this.reactiveForm.get('gender');
    }
 

    getLocation(country: string){
      const select = this.places.find(locate => locate.country == country);
      return select ? select.cities : select;
    }
    get age(){
      return this.reactiveForm.get('age');
    }
    get country(){
      return this.reactiveForm.get('location')?.get('country');
    }
    get city(){
      return this.reactiveForm.get('location')?.get('city');
    }

    // requiredValidator(){
    //   let country_list=["India","Canada","US"];
    //   let con=this.reactiveForm.value['location'].country;
    //   console.log(country_list.indexOf(con));
    //       if(country_list.indexOf(con)!=-1){
    //            this.err=false;
    //       }
    //       else{
    //            this.err=true;
    //       }
    //   }


}

