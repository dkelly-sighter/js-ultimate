const ultimateFieldXYards = 70 * 2;
const ultimateEndzoneXYars = 25 * 2;
const ultimateFieldYYars = 40 * 2;

const ultimateFieldXFeet = ultimateFieldXYards * 3;
const ultimateEndzoneXFeet = ultimateEndzoneXYars * 3;
const ultimateFieldYFeet = ultimateFieldYYars * 3;

import { Field } from "./field.js";
import { TeamFactory } from './teamFactory.js';

const redTeamColor = "#c82124";
const blueTeamColor = "#3370d4";

let field = new Field(ultimateEndzoneXFeet, ultimateFieldXFeet, ultimateFieldYFeet);

let teamFactory = new TeamFactory();
let redTeam = teamFactory.buildTeam(redTeamColor);
let blueTeam = teamFactory.buildTeam(blueTeamColor);

let players = redTeam.concat(blueTeam);

let c = document.getElementById("myCanvas");
/** @type {CanvasRenderingContext2D} **/
let ctx = c.getContext("2d");

setInterval(draw, 1/60);

function draw( )
{
    ctx.clearRect(0, 0, field.getWidth(), field.getLength());
    field.draw(ctx);
    players.forEach(element => {
        element.makeDecisions(field, players);
        element.draw(ctx);
    });
    
}
