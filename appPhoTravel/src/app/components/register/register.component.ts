import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private usuariosServices: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
      ]),
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      fecha_nacimiento: new FormControl('', [
        Validators.required,
        this.edadValidator
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      repit_password: new FormControl('', [
        Validators.required,
        this.passwordValidator

      ])
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    await this.usuariosServices.register(this.formulario.value)
    this.router.navigate(['/login'])
  };

  checkError(controlName: string, error: string): boolean {
    return this.formulario.get(controlName)!.hasError(error) && this.formulario.get(controlName)!.touched;
  };


  passwordValidator(form: AbstractControl) {
    const passwordValue = form.get('password')?.value;
    const repitePasswordValue = form.value;

    if (passwordValue === repitePasswordValue) {
      return null;
    } else {
      form.get('repit_password')?.setErrors({ passwordValidator: true })

      return { passwordValidator: 'Las contraseñas no coinciden' };
    }
  };


  edadValidator(control: AbstractControl) {
    const edadValue = parseInt(control.value)

    if (edadValue == parseInt('')) {
      return null;
    }

    const edadMin = 18;
    if (edadValue >= edadMin) {
      return null

    } else {
      return { edadValidator: { min: edadMin } }
    }


  }



}
