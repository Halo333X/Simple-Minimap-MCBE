declare interface Uint8Array {
    readInt16(idx: number): number;
    readInt32(idx: number): number;
    readInt64AsFloat(idx: number): number;
    
    readFloat32(idx: number): number;
    readFloat64(idx: number): number;

    /// Reads a null-terminated string
    readString(idx: number): string;
}

declare type Buffer = Uint8Array;