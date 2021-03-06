import { Component, OnInit } from '@angular/core';
import { SteamApiService } from '../services/steam-api-service/steam-api.service';
import {map, filter, retry} from 'rxjs/operators';

@Component({
  selector: 'app-steam-global-component',
  templateUrl: './steam-global-component.component.html',
  styleUrls: ['./steam-global-component.component.scss']
})
export class SteamGlobalComponentComponent implements OnInit {

  public getOwnedGames: string;
  public getSchemaForGame: string;
  public gameProvider = 'steam';

  constructor(private steamApi: SteamApiService) {
  }




// https://offering.solutions/blog/articles/2016/02/01/consuming-a-rest-api-with-angular-http-service-in-typescript/

  ngOnInit() {
        this.steamApi
            .getOwnedGames<string>()
            .subscribe(
              (data: string) => this.getOwnedGames = JSON.stringify(data),
                error => (err: string) => {
                  console.log('Error : ' + err);
                },
            () => {
                console.log('getOwnedGames completed : ' + this.getOwnedGames );
            });




        this.steamApi.getSchemaForGame().subscribe(
            (data: string) => this.getSchemaForGame = JSON.stringify(data),
              error => (err: string) => {
                console.log('Error : ' + err);
              },
          () => {
              console.log('getSchemaForGame completed' + this.getSchemaForGame);
          });

  }

}
