export class TraficLight {
    constructor(redLight, greenLight, blueLight, currentLight, time) {
        this.redLight = redLight;
        this.yellowLight = greenLight;
        this.greenLight = blueLight;
        this.currentLightOn = currentLight;
        this.time = time;
    }
    startChangingPeriodicallyStates() {
        setInterval(() => {
            this.setAllLightsNextState();
            this.changeCurrenLightOn();
        }, this.time);
    }
    setAllLightsNextState() {
        let lights = this.getLights();
        for (let i = 0; i < lights.length; i++) {
            this.setLightNextState(i);
        }
    }
    setLightNextState(lightIndex) {
        let lights = this.getLights();
        if (lightIndex != this.currentLightOn) {
            lights[lightIndex].turnOff(this.time, 100);
        }
        else {
            lights[lightIndex].turnOn(this.time, 100);
        }
    }
    changeCurrenLightOn() {
        this.currentLightOn--;
        if (this.currentLightOn < 0) {
            this.currentLightOn = 2;
        }
    }
    getLights() {
        return [this.redLight, this.yellowLight, this.greenLight];
    }
}
//# sourceMappingURL=TraficLight.js.map