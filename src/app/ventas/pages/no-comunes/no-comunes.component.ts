import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  //i18n Select
  nombre: string = "Susana"; 
  genero: string = "femenino";

  invitacionMapa = {
    "masculino": "invitarlo", 
    "femenino": "invitarla", 
  }

  //i18n Plural
  clientes: string[] = ["Maria", "Jose", "Carmen"]; 
  clientesMapa = {"=0": "no tenemos ningún cliente esperando.", 
  "=1": "tenemos un cliente esperando", 
  "=2": "tenemos dos clientes esperando", 
  "other": "tenemos # clientes esperando"
}

  cambiarCliente () {
    this.nombre = "Melissa";
    this.genero = "femenino";
  }

  borrarCliente () {
    this.clientes.pop(); 
  }


}
