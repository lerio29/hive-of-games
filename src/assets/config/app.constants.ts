import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    declarations: [],
    providers: [],
    exports: []
  })
export class Configuration {

    public static get getOwnedGamesUrl(): string {
        return 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=XXXXXXXXXXXXXX&steamid=XXXXXXXXXXXXXX&format=json';
    }

    public static get getSchemaForGame(): string {
        return 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=XXXXXXXXXXXXXX&appid=218620';
    }

}