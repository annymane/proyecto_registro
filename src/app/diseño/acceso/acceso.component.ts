import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormRecord, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
   })
  }

  ngOnInit(): void {
  }

  ingresar(){
    
    const usuario = this.form.value.usuario;

    const password = this.form.value.password;

    if (usuario == 'admin' && password == 'admin'){
      this.error_cargar();
    } else{
      this.error();
      this.form.reset();
    }

  }

  error(){
      this._snackBar.open('Usuario o contraseña incorrectos', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
  }

  error_cargar(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
  

}
