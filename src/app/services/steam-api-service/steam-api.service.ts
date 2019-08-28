import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Configuration } from '../../../assets/config/app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteamApiService {

  private getOwnedGamesUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.getOwnedGamesUrl = Configuration.getOwnedGamesUrl;

   }


  getOwnedGames<T>(): Observable<T> {
    return this.http.get<T>(this.getOwnedGamesUrl);
  }


}
