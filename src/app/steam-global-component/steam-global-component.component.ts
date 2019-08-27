import { Component, OnInit } from '@angular/core';
import { SteamApiService } from '../steam-api.service';

@Component({
  selector: 'app-steam-global-component',
  templateUrl: './steam-global-component.component.html',
  styleUrls: ['./steam-global-component.component.scss']
})
export class SteamGlobalComponentComponent implements OnInit {

  public getOwnedGames: string;
  
  public gameProvider: string = "steam";

  constructor(private steamApi: SteamApiService) { 
    private steamApi: SteamApiService;
  }




// https://offering.solutions/blog/articles/2016/02/01/consuming-a-rest-api-with-angular-http-service-in-typescript/

  ngOnInit() {
    
        this.steamApi
            .getOwnedGames<string>()
            .subscribe((data: any[]) => this.values = data,
            error => () => {
                this.toasterService.pop('error', 'Damn', 'Something went wrong...');
            },
            () => {
                this.toasterService.pop('success', 'Complete', 'Getting all values complete');
                this.slimLoadingBarService.complete();
            });
  }

}
