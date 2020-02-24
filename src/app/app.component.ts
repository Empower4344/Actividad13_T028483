import { Component, OnInit } from '@angular/core';
import {textareaAutoResize} from 'materialize-css';

declare let $: any;
declare const M;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  Titulos = [];
  Notas = [];

  ngOnInit(): void {
    $('.collapsible').collapsible();
  }

  CreateNote(Titulo: HTMLInputElement, Contenido: HTMLInputElement) {
    if (Titulo.value === '' || Contenido.value === '') {
      alert('No se puede dejar ningun espacio en blanco');
    } else {
      this.Titulos.unshift(Titulo.value);
      this.Notas.unshift(Contenido.value);
    }
    Titulo.value = null;
    Contenido.value = null;
    $('textarea#Contenido').val(null);
    M.textareaAutoResize($('#Contenido'));
  }

}
