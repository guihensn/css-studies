export class OperateTrafictLight {
    constructor(trafficLight, adapterUi) {
        this.trafictLight = trafficLight;
        this.adapterUi = adapterUi;
    }
    run() {
        this.trafictLight.startChangingPeriodicallyStates();
        setInterval(() => {
            this.adapterUi.updateTraphicLight(this.trafictLight);
        }, 50);
    }
}
//# sourceMappingURL=OperateTraficLight.js.map