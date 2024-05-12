/**
 * A class representing a rectangle on the screen.
 * @member left The x coordinate of the top-left point.
 * @member top The y coordinate of the top-left point.
 * @member right The x coordinate of the bottom-right point.
 * @member bottom The y coordinate of the bottom-right point.
 */
declare class Rect {
    /**
     * 
     * @param left The x coordinate of the top-left point.
     * @param top The y coordinate of the top-left point.
     * @param right The x coordinate of the bottom-right point.
     * @param bottom The y coordinate of the bottom-right point.
     */
    constructor(left: number, top: number, right: number, bottom: number);

    left: number;
    top: number;
    right: number;
    bottom: number;

    getWidth(): number;
    getHeight(): number;
}

declare class Vector2 {
    add: (vec: Vector2) => Vector2;
    sub: (vec: Vector2) => Vector2;
    mul: (vec: Vector2) => Vector2;
    div: (vec: Vector2) => Vector2;
    distanceTo: (pos: Vector2) => number;
    /**
     * A point on the screen.
     * @param x The x coordinate.
     * @param y The y coordinate.
     */
    constructor(x: number, y: number);
    constructor();

    x: number;
    y: number;
}

declare class Vector3 {
    add: (vec: Vector3) => Vector3;
    sub: (vec: Vector3) => Vector3;
    mul: (vec: Vector3) => Vector3;
    div: (vec: Vector3) => Vector3;
    distanceTo: (pos: Vector3) => number;

    constructor(x: number, y: number, z: number);
    constructor();
    x: number;
    y: number;
    z: number;
}

declare class Color {
    asAlpha: (opacity: number) => Color;

    public r: number;
    public g: number;
    public b: number;
    public a: number;

    /**
     * 
     * @param r Red (0.0 to 1.0)
     * @param g Green (0.0 to 1.0)
     * @param b Blue (0.0 to 1.0)
     * @param a Opacity (0.0 to 1.0)
     */
    constructor(r: number, g: number, b: number, a: number);

    constructor();

    /**
     * 
     * @param r Red (0 to 255)
     * @param g Green (0 to 255)
     * @param b Blue (0 to 255)
     * @param a Opacity (0 to 255)
     */
    static RGB(r: number, g: number, b: number, a: number | undefined): Color;

    static WHITE: Color;
    static BLACK: Color;
    static RED: Color;
    static GREEN: Color;
    static BLUE: Color;
}

declare const enum TextAlignment {
    Left,
    Right,
    Center
}

declare const enum VerticalAlignment {
    Top,
    Bottom,
    Center
}

type BackendType 
    = 
    /**
     *  */
    "dx";

declare interface Graphics {
    /**
     * 
     * @param renderer `"dx"`: uses Direct2D/DirectWrite, `"minecraft":` use the Minecraft renderer
     */
    use(renderer: "dx" | "minecraft"): void;
    drawRect(rect: Rect, color: Color, thickness: number): void;
    fillRect(rect: Rect, color: Color): void;

    /**
     * Draws text on the position specified
     * @param pos The position to draw the text
     * @param text The text to draw
     * @param size The size of the text in pixels
     * @param color The color of the text
     */
    drawText(pos: Vector2, text: string, size: number, color: Color): void;

    /**
     * A full verison of drawText, where you can specify the bounds of the text and the alignment
     * @param area The place to render the text 
     * @param text The text to render
     * @param size The size of the text
     * @param color The color of the text
     * @param alignment The horizontal alignment
     * @param verticalAlignment The vertical alignment
     */
    drawTextFull(area: Rect, text: string, size: number, color: Color, alignment: TextAlignment, verticalAlignment: VerticalAlignment): void;

    /**
     * Draws a texture.
     * @param texture The texture to draw
     * @param pos The position to draw the texture
     * @param sizeX The size of the texture in pixels
     * @param sizeY The size of the texture in pixels
     * @param color The overlay color of the texture (defaults to white)
     */
    drawTexture(texture: Texture, pos: Vector2, sizeX: number, sizeY: number, color?: Color): void;
}

declare const graphics: Graphics;
