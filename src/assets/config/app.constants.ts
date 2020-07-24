import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    declarations: [],
    providers: [],
    exports: []
  })
export class Configuration {

    public static get getOwnedGamesUrl(): string {
        return 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=989FF220FDEDD7731F581112BE68AC38&steamid=76561198003839094&format=json';
    }

    public static get getSchemaForGame(): string {
        return 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=989FF220FDEDD7731F581112BE68AC38&appid=218620';
    }

}