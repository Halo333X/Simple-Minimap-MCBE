interface CommandEvents {
    /**
     * Called on any command being used.
     * @param label The beginning of the command line (for example, `'test'` in '.test 123')
     * @param args The list of arguments of the command line (for example, `['123']` in '.test 123')
     * @param commandLine The command line (for example, `'.test 123 test'` in '.test 123 test')
     * @returns Whether the command usage is successful or not (return `false` if the user misused the command)
     */
    "execute" : (label: string, args: string[], commandLine: string) => boolean;
}

// A class representing a Latite Client command.
declare class Command {
    readonly name: string;
    readonly description: string;
    readonly aliases: string[];

    /**
     * 
     * @param name The name of the command
     * @param description A short description of what the command does
     * @param usage The usage of the command put '$' in place of the actual command name and preifx. Example: usage: "$ <name>" -> ".commandname <name>"
     * @param aliases Alternative command names the user can use the execute the same command. Can be empty
     */
    constructor(name: string, description: string, usage: string, aliases: string[]);

    on: <K extends keyof CommandEvents>(eventName: K, handler: CommandEvents[K]) => void;
}