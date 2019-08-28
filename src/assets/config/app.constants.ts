import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    declarations: [],
    providers: [],
    exports: []
  })
export class Configuration {

    public static get getOwnedGamesUrl(): string {
        return 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=XXXXXXX&steamid=76561198003839094&format=json'
    };

}