interface LatiteEvent {
}

interface CancellableEvent extends LatiteEvent {
    cancel: boolean;
}

interface SendChatEvent extends CancellableEvent {
    readonly message: string;
}

type MessageType = 
    "raw" |
    "chat" |
    "translation" |
    "popup" |
    "jukebox" |
    "tip" |
    "system_message" |
    "whisper" |
    "announcement" |
    "text_object" |
    "object_whisper";

interface MessageEvent extends CancellableEvent {
    readonly type: MessageType;
    /**
     * Whether or not the message type is a chat message.
     */
    readonly isChat: boolean;
    readonly message: string;

    /**
     * The sender of the message (if applicable)
     */
    readonly sender: string;
    /**
     * The Xbox User ID of the sender (if applicable)
     */
    readonly xuid: string;
}

declare const enum MouseButton {
    Left = 1,
    Right = 2,
    Middle = 3,
    Scroll = 4
}

interface ClickEvent extends CancellableEvent {
    readonly button: MouseButton;
    readonly isDown: boolean;
    readonly mouseX: number;
    readonly mouseY: number;
}

interface KeyEvent extends CancellableEvent {
    readonly isDown: boolean;
    readonly keyCode: KeyCode; // like 0x43
    readonly keyAsChar: string; // like 'C'
}

interface ScriptEvent extends LatiteEvent {
    readonly scriptName: string,
    readonly scriptVersion: string,
    readonly scriptAuthor: string
}

type TitleType =
    "clear" |
    "reset" |
    "title" |
    "subtitle" |
    "actionbar" |
    "titleraw" |
    "subtitleraw" |
    "actionbarraw" |
    "times";

interface TitleEvent extends CancellableEvent {
    readonly type: TitleType;
    readonly text: string;
}

interface TextInputEvent extends CancellableEvent {
    readonly characters: string;
}

interface ClientEvents {
    /**
    * Called on every tick.
    */
    "world-tick": LatiteEvent,
    /**
     * 
     */
    "join-game": LatiteEvent,

    /**
    * Called on the user leaving a world.
    */
    "leave-game": LatiteEvent,
    /**
    * Called on every message received.
    * 
    * Listener:
    * ```ts
    * {
    *   type: MessageType;
    *   isChat: boolean;
    *   message: string;
    *   sender: string;
    *   xuid: string;
    * }
    * ```
    */
    "receive-chat": MessageEvent,
    /**
    * Called on every chat message sent. Cancellable - setting `cancel` to true will make the game not see the event.
    * 
    * Listener:
    * ```ts
    * {
    *   message: string,
    *   cancel: boolean
    * }
    * ```
    */
    "send-chat": SendChatEvent,
    /**
    * Called on every frame; use this for 2D rendering.
    */
    "render2d": LatiteEvent,
    /**
    * Called on every frame; use this for DirectX rendering.
    */
    "renderDX": LatiteEvent,
    /**
    * Called on every keyboard input. Cancellable - setting `cancel` to true will make the game not see the event.
    * 
    * Listener:
    * ```ts
    * {
    *   isDown: boolean,
    *   keyCode: KeyCode,
    *   keyAsChar: string,
    *   cancel: boolean
    * }
    * ```
    */
    "key-press": KeyEvent,
    /**
    * Called on every (non-move) mouse input. Cancellable - setting `cancel` to true will make the game not see the event.
    * 
    * Listener:
    * ```ts
    * {
    *   button: MouseButton,
    *   isDown: boolean,
    *   mouseX: number,
    *   mouseY: number,
    *   cancel: boolean
    * }
    * ```
    */
    "click": ClickEvent,
    /**
    * Called on every frame; use this for 3D rendering.
    */
    "render3d": LatiteEvent,
    /**
    * Called on the game being minimized/closed.
    */
    "app-suspended": LatiteEvent,
    /**
    * Called on any script being loaded.
    * 
    * Listener:
    * ```ts
    * {
    *   scriptName: string,
    *   scriptVersion: string,
    *   scriptAuthor: string
    * }
    * ```
    */
    "load-script": ScriptEvent,
    /**
    * Called on any script being unloaded.
    * 
    * Listener:
    * ```ts
    * {
    *   scriptName: string,
    *   scriptVersion: string,
    *   scriptAuthor: string
    * }
    * ```
    */
    "unload-script": ScriptEvent,

    /**
    * Called whenever you receive a title from the server.
    * 
    * Listener:
    * ```ts
    * {
    *   type: TitleType,
    *   text: string
    * }
    * ```
    */
    "title": TitleEvent;

    /**
     * Called whenever text input is received.
     * 
     * ```ts
     * Listener:
     * {
     *   characters: string
     * }
     * ```
     */
    "text-input": TextInputEvent;
}

interface Latite {
    /**
     * Listen to an event.
     */
    on<K extends keyof ClientEvents>(eventName: K, listener: (event: ClientEvents[K]) => void): void

    /**
     * Shows a Latite toast on the top of the screen.
     * @param notif The notification to show.
     */
    showNotification(notif: string): void;

    /**
     * Runs a Latite command.
     * @param cmd The command to run. Do not add the prefix (.)
     * @returns The success of the command.
     */
    runCommand(cmd: string): boolean;

    /**
     * Gets the module manager. Use this to register modules.
     */
    getModuleManager(): ModuleManager;

    /**
     * Gets the command manager. Use this to register commands.
     */
    getCommandManager(): CommandManager;

    /**
    * The Latite Client version. Example: "v2.0.0"
    */
    readonly version: string;
}

declare const client: Latite;