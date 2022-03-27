import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela' 
})
export class VuelaPipe implements PipeTransform {
    
    transform(valor: boolean) : string {
        console.log(valor);
        return (valor) ? "vuela": "no vuela";
    }
    /*transform(): string {
        return "HOLA MUNDO!"; 
    }
    */
}
