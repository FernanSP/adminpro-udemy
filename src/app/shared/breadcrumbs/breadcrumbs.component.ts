import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router) {  //private route : ActivatedRoute

    //console.log(route.snapshot.children[0].data);   //Otra forma, aunque habría que suscribirse a los hijos

    this.tituloSubs$ = this.getArgumentosRuta()
                          .subscribe(({titulo}) => {
                            this.titulo = titulo
                            document.title = `AdminPro -${titulo}`;
                        });

  }

  ngOnDestroy(){
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(){

    return this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )

  }
}