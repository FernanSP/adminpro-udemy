import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import {retry, take, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    this.intervalSubs = this.retornoIntervalo().
      subscribe(console.log)
    // this.retornoObservable().subscribe(
    //   valor => console.log('Subs: ', valor), 
    //   error => console.warn('Error: ', error),
    //   () => console.info('Obs terminado')
    // );

   }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornoIntervalo(): Observable<number> {
    return interval(100)
                        .pipe(
                          take(4),
                          map(valor => valor +1),
                          filter(valor => (valor % 2 === 0) ? true: false)
                          );
    //return intervalo$;
  }

  retornoObservable(): Observable<number> {
    const obs$ = new Observable<number>( observer => {

      let i = -1;

      const intervalo = setInterval( ()=> {
        i++;
        observer.next(i);

        if (i==4){
          clearInterval(intervalo);
          observer.complete();
        }

        if (i==2){
          observer.error('i igual a 2');
        }

      }, 1000)

    });

    return obs$;
  }

}
