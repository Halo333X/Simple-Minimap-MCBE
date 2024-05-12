declare class Texture {
    /**
     * Loads a texture from file.
     * @param filePath The file path to the texture, could be absolute or relative to the script folder
     */
    public static load(filePath: string): Texture;

    /**
     * Gets a Minecraft texture. Can only be drawn with the Minecraft renderer
     * @param textureName The texture name, example: `"textures/items/arrow"`
     */
    public static get(textureName: string): Texture;
    
    /**
     * Reloads the (Minecraft renderer) texture.
     */
    public reload(): void;

    /**
     * Destroys the texture. It's highly recommended to set the texture to `null` after you call this
     */
    public dispose(): void;
}