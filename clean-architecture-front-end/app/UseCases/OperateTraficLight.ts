import { TraficLight } from "../Entities/TraficLight";
import { IAdapterUi } from "./IAdapteUi";

export class OperateTrafictLight{
    trafictLight: TraficLight;
    adapterUi: IAdapterUi

   constructor(trafficLight: TraficLight, adapterUi: IAdapterUi){
    this.trafictLight = trafficLight;
    this.adapterUi = adapterUi;
   }

   run(): void{
       this.trafictLight.startChangingPeriodicallyStates();
       
        setInterval(() =>{
            this.adapterUi.updateTraphicLight(this.trafictLight);
        },50);
   } 
}