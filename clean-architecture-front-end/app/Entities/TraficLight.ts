import { Light } from "./Light.js";

export class TraficLight {
    redLight: Light;
    yellowLight: Light;
    greenLight: Light;
    currentLightOn: number;

    time: number;

    constructor(redLight: Light, greenLight: Light, blueLight: Light, currentLight: number, time:number) {
        this.redLight = redLight;
        this.yellowLight = greenLight;
        this.greenLight = blueLight;
        this.currentLightOn = currentLight;
        this.time = time;
    }

    startChangingPeriodicallyStates(){
        setInterval(() =>{
            this.setAllLightsNextState();
            this.changeCurrenLightOn();
        },this.time);
    }
    
    setAllLightsNextState() {
        let lights = this.getLights();

        for (let i = 0; i < lights.length; i++) {
           this.setLightNextState(i);
        }
    }

    private setLightNextState(lightIndex: number) {
        let lights = this.getLights();

        if (lightIndex != this.currentLightOn) {
            lights[lightIndex].turnOff(this.time, 100);
        } else {
            lights[lightIndex].turnOn(this.time, 100);
        }
    }

    private changeCurrenLightOn(){
        this.currentLightOn--;

        if (this.currentLightOn < 0) {
            this.currentLightOn = 2
        }
    }

    getLights() {
        return [this.redLight, this.yellowLight, this.greenLight]
    }
}