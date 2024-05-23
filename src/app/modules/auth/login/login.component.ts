import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

// declare function _clickDoc():any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Input() HeaderLogin: boolean=false;


  //auth-login
  email:any = null;
  password:any = null;

  // auth-register
  email_register:any = null;
  password_register:any = null;
  name: any = null;
  surname:any = null;
  password_confirmation:any = null;
  constructor(public authService: AuthService, public router: Router, private activeRoute: ActivatedRoute){
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // setTimeout(() => {
    //   _clickDoc();
    // }, 50);

    if(this.authService.user){
      this.router.navigateByUrl("/denuncia");
      return;
    }
  }

  login(){
    if(!this.email || !this.password){
      alert("NECESITAS INGRESAR TODOS LOS CAMPOS");
      return;
    }
    this.authService.login(this.email,this.password).subscribe((resp:any) => {
      console.log(resp);
      if(resp){
        window.location.reload();
      }else{
        alert("LAS CREDENCIALES NO EXISTEN");
      }
    })
  }
}
