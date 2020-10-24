import { Player } from "./player.js";

export class TeamFactory {

    /**
     * 
     * @param {string} teamColor 
     */
    buildTeam(teamColor) {
        let players = [];
        for (let i = 0; i < 7; i++) {
            players.push(new Player(5*i, 5*i, teamColor));
        }
        return players;
    }

}