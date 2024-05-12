declare namespace include {
    export interface Filesystem {
        /**
         * Reads a file asynchronously.
         * @param path The path to read from.
         * @param callback This will get called when the operation is finished
         */
        readAsync(path: string, callback: (err: number, content: Buffer) => void): void;
        
        /**
         * 
         * @param path The path to write to
         * @param data The data to write (see util.stringToBuffer to convert a string to a buffer)
         * @param callback This will get called when the operation is finished
         */
        writeAsync(path: string, data: Buffer, callback: (err: number) => void): void;

        /**
         * Reads a file from the path specified.
         * @param path The relative path from the script.
         */
        read(path: string): Buffer;
        /**
         * Writes a file to the path specified.
         * @param path The relative path from the script.
         * @param data The data to write. For example, `util.stringToBuffer("hello")`
         */
        write(path: string, data: Buffer): void;

        /**
         * Checks if a file or a directory exists
         * @param path The path to check if a file or directory exists
         */
        exists(path: string): boolean;

        /**
         * Creates a folder/directory.
         * @param path The path to create a directory.
         */
        createDirectory(path: string): void;

        /**
         * 
         * @param path The path to append to the file.
         * @param data The data to append, for example, `util.bufferToString("hello")`
         */
        append(path: string, data: Buffer): void;
    }
}