const fs = require('filesystem');
const minimapModule = new HudModule('Minimap', 'Minimap', 'Simple Minimap', 77, true);
const rect = new Rect(1080, 0, 250, 40);
minimapModule.setRect(rect);
let before = true;
let minimap = Texture.load('map_before.png');
const playerIcon = Texture.load('player.png');
let counter = 0;

minimapModule.on('render', () => {
    const { x, y } = minimapModule.getPos();
    const textSize = graphics.getTextSize(`Minimap`, 7);
    const rectWidth = textSize.x + 300;
    const rectHeight = textSize.y + 295;
    rect.left = x;
    rect.top = y;
    rect.right = x + rectWidth;
    rect.bottom = y + rectHeight;
    graphics.fillRect(rect, new Color(0, 0, 0, 1));
    graphics.drawText(new Vector2(x, y), `Minimap`, 7, Color.WHITE);
    minimapModule.setBounds(rectWidth, rectHeight);
    graphics.drawTexture(minimap, new Vector2(x, y), 300, 300, Color.WHITE);
    graphics.drawTexture(playerIcon, new Vector2(x + 150, y + 150), 10, 10, Color.WHITE);
});

client.getModuleManager().registerModule(minimapModule);

client.on('world-tick', (evd) => {
    counter++;
    const player = game.getLocalPlayer();
    const loc = player?.getPosition();
    if (loc && counter >= 20) {
        counter = 0;
        const index = Math.round(Math.random());
        const possiblyTextures = ["map_before.png", "map_after.png"];
        minimap = Texture.load(possiblyTextures[index]);
        writePlayerPositionToTxt(new Vector3(loc.x, loc.y, loc.z));
    }
});

function writePlayerPositionToTxt(position: Vector3) {
    try {
        const txtContent = `${position.x.toFixed(0)} ${position.z.toFixed(0)}`; // Crear una cadena de texto con las coordenadas
        const buffer = util.stringToBuffer(txtContent); // Convertir la cadena en una secuencia de bytes
        fs.write('position.txt', buffer);
    } catch (error) {
        client.showNotification('Error al escribir la posición del jugador en position.txt: ' + error);
    }
}