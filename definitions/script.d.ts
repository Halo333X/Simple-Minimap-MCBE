interface EngineLibraries {
    "filesystem": include.Filesystem
    "http": include.HTTP
    "clipboard": include.Clipboard
}

/**
 * Prints to chat.
 * @param contents The contents to log.
 */
declare function clientMessage(... contents: any[]): void;

/**
 * Load a specified library.
 * @param path The filepath, HTTP or HTTPS link to the JS file.
 * @throws Invalid filepath or Non-OK HTTP/HTTPS error code
 */
declare function require<K extends keyof EngineLibraries>(path: K): EngineLibraries[K];

/**
 * 
 * @param path The path to load the library
 */
declare function require(path: string): any;

/**
 * Stops execution for a specified amount of time.
 * 
 * **Warning**: This stops execution of both the JavaScript runtime and the game thread. This is only for specific use cases (use setTimeout instead.)
 * @param ms The amount of time to sleep.
 */
declare function sleep(ms: number): void;

/**
 * Delays a function call.
 * @param func The function to call
 * @param timeout The time in milliseconds
 * @returns The Timeout ID
 */
declare function setTimeout(func: () => void, timeout: number): number;

/**
 * Calls a function every x milliseconds.
 * @param func The function to call
 * @param timeout The time in milliseconds
 * @returns The Timeout ID
 */
declare function setInterval(func: () => void, timeout: number): number;

interface ScriptModule {
    /**
     * What the script exports.
     */
    exports: {}
}

interface IScript {
    /**
     * @deprecated
     */
    name: string;

    /**
     * @deprecated
     */
    author: string;

    /**
     * @deprecated
     */
    description: string;

    /**
     * @deprecated
     * @param values 
     * @returns 
     */
    log: (... values: any[]) => void 
}

declare var script: IScript;