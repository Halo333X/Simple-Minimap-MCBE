/**
 * A class representing a Minecraft Item definition (not an item instance)
 */
declare class Item {
    /**
     * The Namespaced ID of the item (e.g. `minecraft:stone`)
     */
    public readonly name: string;
    /**
     * The translate name of the item (e.g. `item.stone`)
     */
    public readonly translateName: string; 
}

/**
 * An instance of an `Item` (has count, damage, etc.)
 */
declare class ItemStack {
    /**
     * The item type. Will be `null` when the item is air.
     */
    public readonly item: Item | null;
    /**
     * The aux/data value of the item (not damage) (-32768 to 32767)
     */
    public readonly aux: number;

    /**
     * Get the display name (e.g. `Cooked Beef`)
     */
    getDisplayName(): string;

    /**
     * Gets the count of the stack
     */
    getCount(): number;

    /**
     * Gets the pickup time in milliseconds
     */
    getPickupTime(): number;

    /**
     * Gets the damage of the item (e.g. if a sword was used once, it would have a damage value of 1)
     */
    getDamage(): number;
}