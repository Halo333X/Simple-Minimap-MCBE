declare class HudModule extends Module {
    constructor(name: string, displayName: string, description: string, key: KeyCode, resizable: boolean);

    getRect(): Rect;
    setRect(newRect: Rect): void;
    setBounds(width: number, height: number): void;
    getSize(): number;
    setSize(): number;
    getPos(): Vector2;
    setPos(x: number, y: number): void;
}

declare class TextModule extends HudModule {
    constructor(name: string, displayName: string, description: string, key: KeyCode);
}