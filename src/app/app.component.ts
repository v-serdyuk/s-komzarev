import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person, Reference, SocialGroup } from './Models/IPerson';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: FormGroup;
  isActive : boolean = false;
  title = 'staistic';
  name = 'Sergey';
  referenceName = '';
  socialGroupName = '';
  personData: Person[] = [];
  referenceData: Reference[] = [];
  socialGroup: SocialGroup[] = [];
  /**
   *
   */

  constructor(private http: HttpClient, fb: FormBuilder) 
  {
    this.form = fb.group({
      fullName: new FormControl(),
      birthDate: new FormControl(),
      profession: new FormControl(),
      sex: new FormControl(),
      location: new FormControl(),
      street: new FormControl(),
      house: new FormControl(),
      flat: new FormControl(),
      jobPlace: new FormControl(),
      socialStatusId : new FormControl(),
      socialGroupId : new FormControl(),
      categoryId : new FormControl(),
      districtId : new FormControl(),
    });

    http.get('api/Person').subscribe((data) => {
      this.personData = data as [];
      console.log(data);
    });

    this.getReference();

    this.getSocialGroup();
    
    setInterval(() => {
      this.isActive = !this.isActive;
    }, 2000);
    
  }
  
  saveReference() {
    var obj = {name: this.referenceName};
    
    this.http
      .post ('api/Reference', obj)
      .subscribe(() => {
      this.getReference();  
      });
  }

  saveSocialGroupStatus() {
    
    this.http
      .post('api/SocialGroupContoller', {name: this.socialGroupName})
      .subscribe(() => {
        this.getSocialGroup();
    
      });
  }

  getSocialGroup(){
    this.http.get('api/SocialGroupContoller').subscribe((data) => {
      this.socialGroup = data as [];
      this.socialGroupName = '';
    })
  }

  getReference(){
    this.http.get('api/Reference').subscribe((data) => {
      this.referenceData = data as [];
      console.log(data);
      this.referenceName = '';
    });
  }
}

