import { Injectable } from '@angular/core';
import {Contacto} from './contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private contactos: Contacto [] =[
   
    {nombre:'Han Solo', oficio:'Cazarrecompensas', imageURL:'https://www.moviezone.cz/obr/YXJ0aWNsZU1haW4vMTM1NDg0'},
    {nombre:'Rey', oficio:'Recolectora', imageURL:'https://wipy.tv/wp-content/uploads/2019/10/Rey-Best-Jedi.jpg'},
    {nombre:'Finn', oficio:'Piloto', imageURL:'https://wipy.tv/wp-content/uploads/2020/09/star-wars-arruino-a-finn.jpg'},
    {nombre:'Leia', oficio:'Princesa', imageURL:'https://www.cinemascomics.com/wp-content/uploads/2016/12/princesa-Leia-en-Star-Wars-8-Carrie-Fisher-muerte.jpg'}
  ]

  constructor() { }

  getContactos(){
    return [...this.contactos]
  }

  getContacto(nombre: string){
    return{

      ...this.contactos.find(contactos => {
        return contactos.nombre === nombre
      })
    }
  }
}
