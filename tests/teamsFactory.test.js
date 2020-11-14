import { TeamsFactory } from "../app/teamsFactory";

test('Teams Factory', () => {
    let teamsFactory = new TeamsFactory();
    let teams = teamsFactory.makeTeams();
    expect(teams).toHaveLength(14);
})