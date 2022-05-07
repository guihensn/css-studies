class RectangleComponent extends HTMLElement {
    shadowRoot;

    constructor() {
        super();

        let div = document.createElement('div');
        
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(div);
    }

    createStyle() {
        let properties = this.getProperties();

        return `
                width: ${properties.width}px;
                height: ${properties.height}px;
                background-color:  ${properties.color};
        `   
    }

    static get observedAttributes(){
        return ['color', 'width', 'height'];
    }

    attributeChangedCallback() {
        let div = this.shadowRoot.querySelector('div');
        console.log(div);
        div.setAttribute('style', this.createStyle());
    }

    getProperties() {
        return {
            width: this.getAttribute('width'),
            height: this.getAttribute('height'),
            color: this.getAttribute('color')
        }
    }
}

window.customElements.define('rectangle-component', RectangleComponent);
