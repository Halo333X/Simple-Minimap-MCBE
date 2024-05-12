declare class Setting {
    /**
     * DO NOT USE - not implemented
     */
    constructor();

    /**
     * The name of the setting
     */
    readonly name: string;
    readonly displayName: string;
    readonly description: string;

    toString(): string;

    /**
     * Gets the value of the setting. Could be null.
     */
    getValue(): any;

    /**
     * Set that this setting will only show when another setting is on or off.
     * @param settingName The setting that this setting will depend on (internal name).
     * @param value The value the other setting needs to be for this setting to show
     */
    setCondition(settingName: string, value?: boolean): void;
}