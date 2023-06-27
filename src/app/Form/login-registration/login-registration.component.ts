import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent {

  @ViewChild('formBx') formBx!:ElementRef;
  @ViewChild('signupform') signupform!:ElementRef
  @ViewChild('signinform') signinform!:ElementRef

  constructor(private renderer:Renderer2){}

  onclickSignUp(){
    const elementFormBox = this.formBx.nativeElement;
    const elementSignUp = this.signupform.nativeElement;
    const elementSignin = this.signinform.nativeElement;

    this.renderer.setStyle(elementFormBox, 'left', '400px');
    this.renderer.setStyle(elementFormBox, 'background', '#03a9f4');

    this.renderer.setStyle(elementSignUp, 'top', '0')

    this.renderer.setStyle(elementSignin, 'top', '-100%')
  }

  onclickSignIn(){
    const elementFormBox = this.formBx.nativeElement;
    const elementSignUp = this.signupform.nativeElement;
    const elementSignin = this.signinform.nativeElement;

    this.renderer.setStyle(elementFormBox, 'left', '50px');
    this.renderer.setStyle(elementFormBox, 'background', '#f43638');

    this.renderer.setStyle(elementSignUp, 'top', '100%')

    this.renderer.setStyle(elementSignin, 'top', '0')
  }

}
