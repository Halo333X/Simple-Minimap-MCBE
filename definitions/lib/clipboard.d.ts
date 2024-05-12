declare namespace include {
    export interface Clipboard {
        /**
         * Gets the current clipboard text
         */
        get(): string;

        /**
         * Sets the clipboard text
         * @param str The text to set the clipboard to
         */
        set(str: string): void;


        /**
         * Gets the copied bitmap. If the clipboard is unable to be opened, it will return null
         */
        getBitmap(): Buffer | null;
    }
}