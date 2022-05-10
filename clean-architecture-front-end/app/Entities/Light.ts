import { Color } from "./Color.js";

export class Light{
    private lightSourceColor: Color;
    private bulbDefaultColor: Color;
    private lightIntensity: number;

    private setInterval: number;

    constructor(bulbColor: Color, lightColor: Color){
        this.bulbDefaultColor = bulbColor;
        this.lightSourceColor = lightColor;
        this.lightIntensity = 0;
    }

    bulbVisibleColor(){
        let emitedColor = this.emitedLightColor();
        
        return this.bulbDefaultColor;
    }

    emitedLightColor(){
        this.lightSourceColor.transparency = this.lightIntensity;

        return this.lightSourceColor;
    }
    

    turnOn(duration, gap){
        clearInterval(this.setInterval);

        this.setInterval = setInterval(() => {
            this.lightIntensity += gap/duration;
            
            if(this.lightIntensity > 1){
                this.lightIntensity = 1;
                clearInterval(this.setInterval);
            }
        },gap)
    }

    turnOff(duration, gap){
        clearInterval(this.setInterval);

        this.setInterval = setInterval(() => {
            this.lightIntensity -= gap/duration;

            if(this.lightIntensity < 0){
                this.lightIntensity = 0;
                clearInterval(this.setInterval);
            }
        },gap)
    }
}