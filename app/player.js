export class Player {

    constructor(xlocation, ylocation, team) {
        this.xlocation = xlocation;
        this.ylocation = ylocation;
        this.directionRight = true;
        this.directionDown = false;
        this.team = team;
        this.thickness = 5;
        this.speedX = 1;
        this.speedY = 1;
    }

    makeDecisions(field, players) {
        this.initializeSpeedForFrame();
        // this.initializeDirectionForFrame();
        this.switchDirectionsIfLeavingField(field);
        this.changeDirectionsBasedOnOtherPlayers(players);
        this.travel();
    }

    switchDirectionsIfLeavingField(field) {
        this.switchWidthDirection(field);
        this.switchHeightDirection(field);
    }

    initializeSpeedForFrame() {
        this.speedX = Math.random() / 2;
        this.speedY = Math.random() / 2;
    }

    initializeDirectionForFrame() {
        if (Math.random() < .1) {
            this.directionRight = !this.directionRight;
        }
        if (Math.random() < .1) {
            this.directionDown = !this.directionDown;
        };
    }

    travel() {
        this.travelWidth();
        this.travelHeight();
    }

    changeDirectionsBasedOnOtherPlayers(players) {
        players.forEach(player => {
            this.changeDirectionBasedOnPlayer(player);
        });
    }

    /**
     * @param {Player} player 
     */
    changeDirectionBasedOnPlayer(player) {
        if (this.playerIsntMe(player)) {
            this.avoidVerticalCollision(player);
            this.avoidHorizontalCollision(player);
        }
    }

    /**
     * @param {Player} player 
     */
    avoidHorizontalCollision(player) {
        if (this.playerIsGonnaHitMeFromTheRight(player)) {
            this.directionRight = false;
            this.speedX = 0;
        } else if (this.playerIsGonnaHitMeFromTheLeft(player)) {
            this.directionRight = true;
            this.speedX = 0;
        }
    }

    playerIsGonnaHitMeFromTheLeft(player) {
        return this.isTooClose(player) && player.isTravelingRight() && this.isTravelingLeft();
    }

    /**
     * @param {Player} player 
     */
    playerIsGonnaHitMeFromTheRight(player) {
        return this.isToMyRight(player) && this.isTooClose(player) && player.isTravelingLeft() && this.isTravelingRight();
    }

    /**
     * @param {Player} player 
     */
    avoidVerticalCollision(player) {
        if (this.playerIsGonnaHitMeFromBelow(player)) {
            this.directionDown = false;
            this.speedY = 0;
        } else if (this.playerIsGonnaHitMeFromAbove(player)) {
            this.directionDown = true;
            this.speedY = 0;
        }
    }

    /**
     * @param {Player} player 
     */
    playerIsGonnaHitMeFromAbove(player) {
        return this.isTooClose(player) && player.isTravelingDown() && this.isTravelingUp();
    }

    playerIsGonnaHitMeFromBelow(player) {
        return this.isBelowMe(player) && this.isTooClose(player) && player.isTravelingUp() && this.isTravelingDown();
    }

    isTravelingLeft() {
        return !this.directionRight;
    }

    isTravelingUp() {
        return !this.directionDown;
    }

    isTravelingDown() {
        return !this.isTravelingUp();
    }

    isTravelingRight() {
        return !this.isTravelingLeft();
    }

    playerIsntMe(player) {
        return player !== this;
    }

    /**
     * 
     * @param {Player} player 
     */
    isBelowMe(player) {
        return player.getLocationY() > this.getLocationY();
    }

     /**
     * 
     * @param {Player} player 
     */
    isToMyRight(player) {
        return player.getLocationX() > this.getLocationX();
    }

    isTooClose(player) {
        return this.abosluteXDifference(player) < this.halfThickness() || 
        this.absoluteYDifference(player) < this.halfThickness();
    }

    absoluteYDifference(player) {
        return Math.abs(player.getLocationY - this.getLocationY);
    }

    abosluteXDifference(player) {
        return Math.abs(player.getLocationX() - this.getLocationX());
    }

    halfThickness() {
        return this.thickness / 2;
    }

    getLocationX() {
        return this.xlocation;
    }

    getLocationY() {
        return this.ylocation;
    }

    travelHeight() {
        if (this.directionDown) {
            this.ylocation += this.speedY;
        } else {
            this.ylocation -= this.speedY;
        }
    }

    travelWidth() {
        if (this.directionRight) {
            this.xlocation += this.speedX;
        } else {
            this.xlocation -= this.speedX;
        }
    }

    switchHeightDirection(field) {
        if (this.directionDown) {
            this.invertDirectionIfTooFarDown(field);
        } else {
            this.invertDirectionIfTooHigh();
        }
    }

    invertDirectionIfTooHigh() {
        if (this.speedWouldPutMeTooHigh()) {
            this.invertYDirection();
            this.ylocation = 0;
        }
    }

    speedWouldPutMeTooHigh() {
        return this.getYBubble() - this.speedY <= 0;
    }

    invertDirectionIfTooFarDown(field) {
        if (this.speedWouldPutMeTooLow() >= field.getLength()) {
            this.invertYDirection();
            this.ylocation = field.getLength();
        }
    }

    speedWouldPutMeTooLow() {
        return this.getYBubble() + this.speedY;
    }

    getYBubble() {
        return this.ylocation + this.thickness;
    }

    invertYDirection() {
        this.directionDown = !this.directionDown;
    }

    switchWidthDirection(field) {
        if (this.directionRight) {
            this.invertDirectionIfTooFarRight(field);
        } else {
            this.invertDirectionIfTooFarLeft();
        }
    }

    invertDirectionIfTooFarLeft() {
        if (this.getXBubble() - this.speedX <= 0) {
            this.invertXDirection();
            this.xlocation = 0;
        }
    }

    invertDirectionIfTooFarRight(field) {
        if (this.getXBubble() + this.speedX >= field.getWidth()) {
            this.invertXDirection();
            this.xlocation = field.getWidth();
        }
    }

    getXBubble() {
        return this.xlocation + this.thickness;
    }

    invertXDirection() {
        this.directionRight = !this.directionRight;
    }

    /**
     * @param {CanvasRenderingContext2D} canvasRenderingContext2D 
     */
    draw(canvasRenderingContext2D) {
        canvasRenderingContext2D.fillStyle = this.team;
        canvasRenderingContext2D.beginPath();
        canvasRenderingContext2D.arc(this.xlocation, this.ylocation, this.thickness, 0, 2 * Math.PI);
        canvasRenderingContext2D.stroke();
        canvasRenderingContext2D.fill();
    }

}