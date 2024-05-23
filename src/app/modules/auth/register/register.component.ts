import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

// declare function _clickDoc():any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  @Input() HeaderLogin: boolean=false;

  // auth-register
  email_register:any = null;
  password_register:any = null;
  name: any = null;
  surname:any = null;
  password_confirmation:any = null;
  constructor(public authService: AuthService, public router: Router, private activeRoute: ActivatedRoute){
  }
  ngOnInit(): void {
    // if(this.authService.user){
    //   this.router.navigateByUrl("/denuncia");
    //   return;
    // }
  }
  register(){
    if(!this.email_register || !this.name || !this.surname || !this.password_register || !this.password_confirmation){
      alert("TODOS LOS CAMPOS SON NECESARIOS");
      return;
    }
    if(this.password_register != this.password_confirmation){
      alert("LAS CONTRASEÑAS SON DIFERENTES");
      return;
    }
    let data = {
      email: this.email_register,
      name: this.name,
      surname: this.surname,
      password: this.password_register,
    }
    this.authService.register(data).subscribe((resp:any) => {
      // console.log(resp);
      alert("EL USUARIO SE HA REGISTRADO CORRECTAMENTE");
    }, error => {
      alert("LAS CREDECIALES INGRESADAS NO SON CORRECTAS O YA EXISTEN");
      // console.log(error);
    })
  }
}
