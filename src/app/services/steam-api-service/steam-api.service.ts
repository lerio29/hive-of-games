import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Configuration } from '../../../assets/config/app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteamApiService {

  private getOwnedGamesUrl: string;
  private getSchemaForGameUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.getOwnedGamesUrl = Configuration.getOwnedGamesUrl;
    this.getSchemaForGameUrl = Configuration.getSchemaForGame;

   }


  getOwnedGames<T>(): Observable<T> {
    return this.http.get<T>(this.getOwnedGamesUrl);
  }


  getSchemaForGame<T>(): Observable<T> {
    return this.http.get<T>(this.getSchemaForGameUrl);
  }


}
