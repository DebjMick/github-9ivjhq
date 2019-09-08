import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata;
 

  constructor(private  _fb:FormBuilder) { 

    // long way
     this.formdata = new FormGroup({
         userName: new FormControl("",Validators.compose(
         [
            Validators.required,
            Validators.pattern("[a-b,A-Z, ,-]+"),
             Validators.minLength(3)
         ])
         ),
         pwd: new FormControl("",Validators.compose(
         [
            Validators.minLength(8), 
            Validators.required
        ])
         )
      });

    // short way (using form builder)
    /*
    this.formdata =this._fb.group({
      userName: ["", [ 
                        Validators.required,
                        Validators.pattern("[a-b,A-Z, ,-]+"),
                        Validators.minLength(3)
                      ]
                ],
       pwd: ["", [  
                        Validators.minLength(8), 
                        Validators.required
                      ]
                ]       
    });  
    */
  }

  ngOnInit() {
  }

  onClickSubmit(data) {

    //data consists of all values of form
    alert("You have entered User Name : "+data.userName+" & Password :  "+data.pwd);
  }

}