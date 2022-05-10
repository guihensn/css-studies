export class IAdapterUIWebPage {
    constructor(element) {
        this.element = element;
    }
    updateTraphicLight(traficLight) {
        let ligths = traficLight.getLights();
        for (let i = 0; i < 3; i++) {
            this.element.updateColor(i, ligths[i].bulbVisibleColor(), ligths[i].emitedLightColor());
        }
    }
}
//# sourceMappingURL=IAdapterUIWebPage.js.map