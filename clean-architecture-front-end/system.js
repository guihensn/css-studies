import { TraficLightElement } from "./TraficLightElement.js";
import { TraficLightFactory } from "./js/Entities/TraficLightFactory.js"
import { IAdapterUIWebPage } from "./js/Adaptors/IAdapterUIWebPage.js"
import { OperateTrafictLight } from "./js/UseCases/OperateTraficLight.js";

export function run() {

    let factory = new TraficLightFactory();
    let trafictLight = factory.create();

    let traficLightEl = new TraficLightElement();
    document.body.appendChild(traficLightEl);

    let adapterUI = new IAdapterUIWebPage(traficLightEl);
    let operateTrafictLight = new OperateTrafictLight(trafictLight, adapterUI);
    operateTrafictLight.run();
}

run()