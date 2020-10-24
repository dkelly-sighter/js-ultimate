export class Field {

    constructor(ultimateEndzoneXFeet, ultimateFieldXFeet, ultimateFieldYFeet) {
        this.ultimateEndzoneXFeet = ultimateEndzoneXFeet;
        this.ultimateFieldXFeet = ultimateFieldXFeet;
        this.ultimateFieldYFeet = ultimateFieldYFeet;
    }

    /**
     * @param {CanvasRenderingContext2D} canvasRenderingContext2D 
     */
    draw(canvasRenderingContext2D) {
        canvasRenderingContext2D.beginPath();
        canvasRenderingContext2D.moveTo(this.ultimateEndzoneXFeet, 0);
        canvasRenderingContext2D.lineTo(this.ultimateEndzoneXFeet, this.ultimateFieldYFeet);
        canvasRenderingContext2D.stroke();
       
        canvasRenderingContext2D.beginPath();
        canvasRenderingContext2D.moveTo(this.ultimateEndzoneXFeet + this.ultimateFieldXFeet, 0);
        canvasRenderingContext2D.lineTo(this.ultimateEndzoneXFeet + this.ultimateFieldXFeet, this.ultimateFieldYFeet);
        canvasRenderingContext2D.stroke();
    }

    getWidth() {
        return (this.ultimateEndzoneXFeet*2) + this.ultimateFieldXFeet;
    }

    getLength() {
        return this.ultimateFieldYFeet;
    }

}