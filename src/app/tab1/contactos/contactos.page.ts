import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Contacto} from '../contacto.model';
import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  contacto: Contacto;

  constructor(private activatedRouter : ActivatedRoute, private contactosService: ContactosService) { }

  ngOnInit() {

    this.activatedRouter.paramMap.subscribe(paramMap => {

      const recipeId = paramMap.get('nombre')
      this.contacto = this.contactosService.getContacto(recipeId);
      console.log(this.contacto)

    })
  }

}
