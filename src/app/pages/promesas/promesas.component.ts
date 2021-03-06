import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios => console.log(usuarios));
    // const promesa = new Promise( (resolve, reject) => {
    //   if(true){
    //   resolve('Hola Mundo');
    //   }else{
    //     reject('Algo salió mal');
    //   }
    // });
    // promesa.then( (mensaje) =>{
    //   console.log(mensaje);
    // })
    // .catch( error => console.log(error));

    // console.log ('Fin del Init');
  }

  getUsuarios(){
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => console.log(body.data));
        //{
        //resp.json().then(body => console.log(body));
      //});
    });
    //return promesa;
  }

}
