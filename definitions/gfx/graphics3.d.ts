interface Graphics3DObject {
    drawLine(p1: Vector3, p2: Vector3, color: Color): void;
    drawBox(p1: Vector3, p2: Vector3, color: Color): void;
}

declare interface Graphics3D {
    /**
     * Draws a mesh.
     * @param func 
     */
    draw(func: (obj: Graphics3DObject) => void): void;
}

declare const gfx3d: Graphics3D;