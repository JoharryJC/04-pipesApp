import { Component, OnInit } from '@angular/core';
import { interval, timeout } from 'rxjs';

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
  clientes: string[] = ["Maria", "Pedro", "Jose", "Carmen", "Eduardo"]; 
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

  //KeyValue Pipe
  personas = {
    nombre: "Fernando", 
    edad: 35,
    direccion: "Ottawa, Canada" 
  }

  //Json Pipe
  heroes = [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Robin",
      vuela: false
    },
    {
      nombre: "Aquaman",
      vuela: false
    }
  ]

  //Async Pipe

  miObservable = interval(5000); //0,1,2,3,4

  valorPromesa = new Promise((resolve, reject)=> {

      setTimeout(()=>{
        resolve("Tenemos data de promesa!")
      }, 3500)
  }
  
  );

}
