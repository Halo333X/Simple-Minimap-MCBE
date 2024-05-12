interface ITextColor {
	FORMAT_CHAR: string;

	// Formatting

	OBFUSCATE: string; // k
	BOLD: string; // l
	ITALIC: string; // o
	RESET: string; // r

	// Base Colors

	BLACK: string;//, '0');
	DARK_BLUE: string;//, '1');
	DARK_GREEN: string;//, '2');
	DARK_AQUA: string;//, '3');
	DARK_RED: string;//, '4');
	DARK_PURPLE: string;//, '5');
	GOLD: string;//, '6');
	GRAY: string;//, '7');
	DARK_GRAY: string;//, '8');
	BLUE: string;//, '9');
	GREEN: string;//, 'a');
	AQUA: string;//, 'b');
	RED: string;//, 'c');
	LIGHT_PURPLE: string;//, 'd');
	YELLOW: string;//, 'e');
	WHITE: string;//, 'f');

	// Bedrock Specific Colors

	MINECOIN_GOLD: string;//, 'g');

	/**
	 * 1.20 ONLY
	 */
	MATERIAL_QUARTZ: string;//, 'h');
	/**
	 * 1.20 ONLY
	 */
	MATERIAL_IRON: string;//, 'i');
	/**
	 * 1.20 ONLY
	 */
	MATERIAL_NETHERITE: string;//, 'j');
	/**
	 * 1.20 ONLY
	 */
	MATERIAL_REDSTONE: string;//, 'm');
	/**
	 * 1.20 ONLY
	 */
	MATERIAL_COPPER: string;//, 'n');
	/**
	 * 1.20 ONLY
	 */
	MATERIAL_GOLD: string;//, 'p');
	/**
	 * 1.20 ONLY
	 */
	MATERIAL_EMERALD: string;//, 'q');
	/**
	 * 1.20 ONLY
	 */
	MATERIAL_DIAMOND: string;//, 's');
	/**
	 * 1.20 ONLY
	 */
	MATERIAL_LAPIS: string;//, 't');
	/**
	 * 1.20 ONLY
	 */
	MATERIAL_AMETHYST: string;//, 'u');

	/**
	 * Formats '&' into colorcoded string.
	 * @param str The string to format into colorcoded string.
	 */
	formatText(str: string): string;
}

declare const TextColor: ITextColor;