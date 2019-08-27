import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SteamApiService {

  let getOwnedGamesUrl: string = 
  'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=XXXXXXX&steamid=76561198003839094&format=json';

  constructor(private http: HttpClient) { 

  }


  getOwnedGames(): string {
    return this.http.get<T>(this.getOwnedGamesUrl);
  }


}
