interface Game {
    /**
     * Sends a chat message.
     * @param msg The message to send.
     */
    sendChatMessage(msg: string): void;

    /**
     * Execute an in-game command.
     * @param cmd The command to send. Be sure to add '/' before your command.
     */
    executeCommand(cmd: string): void;

    /**
     * Plays a sound. Refer to https://www.digminecraft.com/lists/sound_list_pe.php for sounds
     * @param soundName The sound name, for example: mob.enderdragon.growl
     * @param volume The volume of the sound. Default is 1
     * @param pitch Pitch of the sound. Default is 1
     */
    playSoundUI(soundName: string, volume: number, pitch: number): void;

    /**
     * Get your player. This will return null if you are not in a game.
     */
    getLocalPlayer(): LocalPlayer | null;

    /**
     * Gets the server you are connected to. This will return null if you are not in a server.
     */
    getServer(): string | null;

    /**
     * Gets the featured server name you are connected to. This will return null if you are not in a featured server.
     * 
     * Featured server examples: "The Hive" "CubeCraft" "InPvP" "Mineplex"
     */
    getFeaturedServer(): string | null;

    /**
     * Get the current world that you're in.
     */
    getWorld() : World | null;

    /**
     * Get whether you are in a UI screen
     */
    isInUI(): boolean;

    /**
     * Get the open screen name
     */
    getScreen(): string;

    /**
     * Get the mouse position.
     */
    getMousePos(): Vector2;

    /**
     * Gets the user's input setting. Usually a key code; for example, `"forward"` returns `KeyCode.W` by default.
     * 
     * If this function returns 0, either the key is set to nothing or the specified name was not found.
     */
    getInputBinding(name: InputBinding): number;
}

type InputBinding =
    "attack" |
    "pickItem" |
    "use" |
    "drop" |
    "hotbar.1" |
    "hotbar.2" |
    "hotbar.3" |
    "hotbar.4" |
    "hotbar.5" |
    "hotbar.6" |
    "hotbar.7" |
    "hotbar.8" |
    "hotbar.9" |
    "inventory" |
    "togglePerspective" |
    "jump" |
    "sneak" |
    "sprint" |
    "left" |
    "right" |
    "back" |
    "forward" |
    "mobEffects" |
    "chat" |
    "command" |
    "copyCoordinates" |
    "copyFacingCoordinates" |
    "toggleControlTips" |
    "codeBuilder" |
    "immersivereader" |
    "emote" |
    "menuTabLeft" |
    "menuTabRight" |
    "menuCancel";

declare const game: Game;
