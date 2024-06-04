import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Celular } from '../model/celular';

@Injectable({
  providedIn: 'root'
})
export class CelularService {

  constructor(
    private http: HttpClient
  ) { }
  
  private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
  )

  listarCelulares(): Observable<Celular[]> {
    return this.http.get<Celular[]>(`${environment.serverUrl}/progrupo14/celulares`)
  }

  crearCelular(celular: Celular): Observable<Celular> {
    return this.http.post<Celular>(`${environment.serverUrl}/progrupo14/celulares`, celular, { headers: this.headers })
  }
  
  obtenerCelularPorId(id: number): Observable<Celular> {
    return this.http.get<Celular>(`${environment.serverUrl}/progrupo14/celulares/${id}`);
  }

  actualizarCelular(celular: Celular): Observable<Celular> {
    return this.http.put<Celular>(`${environment.serverUrl}/progrupo14/celulares`, celular, { headers: this.headers });
  }

  borrarCelular(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.serverUrl}/progrupo14/celulares/${id}`)
  }

}
