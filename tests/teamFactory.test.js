import { TestScheduler } from "jest";
import { TeamFactory } from "../app/teamFactory";

test('Team Factory', () => {
    let teamFactory = new TeamFactory();
    expect(teamFactory.buildTeam("red")).toHaveLength(7);
})