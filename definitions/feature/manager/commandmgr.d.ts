declare class CommandManager {
    /**
     * Gets the command prefix, default is '.'
     */
    getPrefix(): string;

    /**
     * Adds a command into the client
     * @param cmd The command to add
     */
    registerCommand(cmd: Command): void;

    //deregisterCommand(cmd: Command): void;
}