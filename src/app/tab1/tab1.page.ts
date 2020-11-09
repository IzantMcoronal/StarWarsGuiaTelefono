import { Component, OnInit } from '@angular/core';
import {ContactosService} from './contactos.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  private  contactos = []

  constructor(private contactoService : ContactosService) {}

  ngOnInit(){

    this.contactos = this.contactoService.getContactos()
  }

}
