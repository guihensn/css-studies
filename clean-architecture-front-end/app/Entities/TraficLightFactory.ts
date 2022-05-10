import { Light } from "./Light.js";
import { TraficLight } from "./TraficLight.js";
import { Color } from "./Color.js";

export class TraficLightFactory{
    constructor(){}

    create(){
        let redLight = new Light(
            new Color(124, 60, 40, 0), 
            new Color(245, 0, 0, 0));

        let yellowLight = new Light(
            new Color(12, 50, 40, 0),
            new Color(245, 245, 0, 0))

        let greenLight = new Light(
            new Color(40, 0, 60, 0),
            new Color(0, 245, 0, 1));

        return new TraficLight(redLight, yellowLight, greenLight, 0, 1000);
    }
}