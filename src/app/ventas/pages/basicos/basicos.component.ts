import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower : string = "miguel";
  nombreUpper: string = "MIGUEL";
  nombreCompleto: string = "MiGUEl CoR";

  fecha : Date = new Date(); //el dia de hoy 
    

}
