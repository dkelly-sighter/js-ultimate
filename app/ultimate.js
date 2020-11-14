const ultimateFieldXYards = 70 * 2;
const ultimateEndzoneXYars = 25 * 2;
const ultimateFieldYYars = 40 * 2;

const ultimateFieldXFeet = ultimateFieldXYards * 3;
const ultimateEndzoneXFeet = ultimateEndzoneXYars * 3;
const ultimateFieldYFeet = ultimateFieldYYars * 3;

import { Field } from "./field.js";
import { TeamsFactory } from "./teamsFactory.js";

let field = new Field(ultimateEndzoneXFeet, ultimateFieldXFeet, ultimateFieldYFeet);
let teamsFactory = new TeamsFactory();
let players = teamsFactory.makeTeams();

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
