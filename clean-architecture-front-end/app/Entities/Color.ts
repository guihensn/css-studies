export class Color{
    red: number;
    green: number;
    blue: number;
    transparency: number;
    
    constructor(red: number, green: number, blue: number, transparency:number){
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.transparency = transparency;
    }

    static sum(color1:Color, color2:Color){
        let r = color1.red + color2.red;
        let g = color1.green + color2.green;
        let b = color1.blue + color2.blue;
        let a = color1.transparency + color2.transparency;
        return new Color(r, g, b, a);
    }
}