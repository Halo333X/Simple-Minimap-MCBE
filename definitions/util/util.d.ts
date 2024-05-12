interface IUtil {
    /**
     * Converts a buffer into a UTF-8 string.
     * @param buf 
     */
    bufferToString(buf: Buffer): string;
    /**
     * Converts a string to a UTF-8 buffer.
     * @param str 
     */
    stringToBuffer(str: string): Buffer;
}

declare var util: IUtil;