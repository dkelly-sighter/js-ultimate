import { TeamFactory } from './teamFactory.js';

export class TeamsFactory {

    makeTeams() {
        const redTeamColor = "#c82124";
        const blueTeamColor = "#3370d4";
        let teamFactory = new TeamFactory();
        let redTeam = teamFactory.buildTeam(redTeamColor);
        let blueTeam = teamFactory.buildTeam(blueTeamColor);

        let players = redTeam.concat(blueTeam);
        return players;
    }

}
