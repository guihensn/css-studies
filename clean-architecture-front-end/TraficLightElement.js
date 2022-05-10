const style = `
    #traffic-light{
        width: 100px;
        height: 300px;
        background-color: rgb(0,0, 30);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px
    }

    .light{
        display: block;
        width: 50px;
        height: 50px;
        background-color: black;
        border-radius: 50px;
    }

    .light-outer{
        transform: translate(-25px, -25px);
        display: absolute;
        width: 100px;
        height: 100px;
        background-color: black;
        border-radius: 50px;
    }
`

const html = `
    <style>${style}</style>
    <div id = 'traffic-light'>
        <div class = 'light'>
            <div class = 'light-outer'></div>
        </div>
        <div class = 'light'>
            <div class = 'light-outer'></div>
        </div>
        <div class = 'light'>
            <div class = 'light-outer'></div>    
        </div>
    </div>
`

export class TraficLightElement extends HTMLElement {
    shadowRoot;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = html;
    }

    updateColor(light, bulbColor, emitedColor) {
        let lights = this.shadowRoot.querySelectorAll('.light');
        let lightsOuters = this.shadowRoot.querySelectorAll('.light-outer');

        let bulbColorStyle = `background-color:rgb(${bulbColor.red}, ${bulbColor.green}, ${bulbColor.blue})`;
        let emitedColorStyle = `background: radial-gradient(rgba(${emitedColor.red}, ${emitedColor.green}, ${emitedColor.blue}, ${emitedColor.transparency}) 1%, #0000 90%) `;

        lights[light].setAttribute('style', bulbColorStyle);
        lightsOuters[light].setAttribute('style', emitedColorStyle);
    }
}

window.customElements.define('traffic-light', TraficLightElement);