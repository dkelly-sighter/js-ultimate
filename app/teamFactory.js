import { Player } from "./player.js";

const teamMembers = 7;

export class TeamFactory {

    /**
     * @param {string} teamColor 
     */
    buildTeam(teamColor) {
        let players = [];
        for (let i = 0; i < teamMembers; i++) {
            players.push(new Player(5*i, 5*i, teamColor));
        }
        return players;
    }

}