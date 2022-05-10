export class Color {
    constructor(red, green, blue, transparency) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.transparency = transparency;
    }
    static sum(color1, color2) {
        let r = color1.red + color2.red;
        let g = color1.green + color2.green;
        let b = color1.blue + color2.blue;
        let a = color1.transparency + color2.transparency;
        return new Color(r, g, b, a);
    }
}
//# sourceMappingURL=Color.js.map