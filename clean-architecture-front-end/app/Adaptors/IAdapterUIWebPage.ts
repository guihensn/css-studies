import { TraficLight } from "../Entities/TraficLight.js";
import { TraficLightElement } from "../../TraficLightElement.js";
import {IAdapterUi} from "../UseCases/IAdapteUi.js"

export class IAdapterUIWebPage implements IAdapterUi {
    element: TraficLightElement;

    constructor(element: TraficLightElement){
        this.element = element;
    }

    updateTraphicLight(traficLight: TraficLight) {
        let ligths = traficLight.getLights();

        for(let i = 0; i < 3; i++) {
            this.element.updateColor(i, ligths[i].bulbVisibleColor(), ligths[i].emitedLightColor())
        }
    }
}