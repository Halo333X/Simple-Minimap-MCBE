interface ModuleManager {
    /**
     * Registers a module into the Latite mod. This makes it appear in the mod menu, and be interactive.
     * @param mod The module to register.
     */
    registerModule(mod: Module): void;

    //deregisterModule(mod: Module): void;

    /**
     * Gets a module by the specified InternalName.
     * For example, ArmorHud is the internal name for Armor Hud.
     * Position is the internal name of Coordinates
     * @param name The name of the module to get.
     */
    getModuleByName(name: string): Module | null;

    /**
     * Loop through each module.
     * @param callback
     */
    forEachModule(callback: (mod: Module) => void): void;
}
