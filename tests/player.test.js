import { Player } from "../app/player";

test('player constructor', () => {
    let player = new Player(23, 38, 'red');
    expect(player.getLocationX()).toBe(23);
    expect(player.getLocationY()).toBe(38);
    expect(player.team).toBe('red');
});