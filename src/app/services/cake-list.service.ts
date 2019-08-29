import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cake, CakeAttrs } from '../models/cake';
import { map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http: HttpClient) { }

  getCakes(): Observable<Cake[]> {
    return this.http.get<CakeAttrs[]>(`/api/cakes`).pipe(
      map((data) => data.map((cakeAttrs) => new Cake(cakeAttrs)))
    );
  }

  getCake(id: number) {
    return this.http.get<CakeAttrs>(`/api/cakes/${id}`).pipe(
      map((cakeAttrs) => new Cake(cakeAttrs))
    );
  }

  saveCake(cakeAttrs: CakeAttrs): Observable<Cake> {
    if (cakeAttrs.id) {
      return this.updateCake(cakeAttrs);
    } else {
      return this.createCake(cakeAttrs);
    }
  }

  deleteCake(id: number) {
    return this.http.delete<Cake>(`/api/cakes/${id}`).pipe(
      retry(1),
    );
  }

  private updateCake(data: CakeAttrs): Observable<Cake> {
    return this.http.put(`/api/cakes/${data.id}`, data).pipe(
      map((cakeAttrs) => new Cake(cakeAttrs))
    );
  }

  private createCake(data: CakeAttrs): Observable<Cake> {
    return this.http.post(`/api/cakes`, data).pipe(
      map((cakeAttrs) => new Cake(cakeAttrs))
    );
  }
}
