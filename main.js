var fs = require('filesystem');
var minimapModule = new HudModule('Minimap', 'Minimap', 'Simple Minimap', 77, true);
var rect = new Rect(1080, 0, 250, 40);
minimapModule.setRect(rect);
var before = true;
var minimap = Texture.load('map_before.png');
var playerIcon = Texture.load('player.png');
var counter = 0;
minimapModule.on('render', function () {
    var _a = minimapModule.getPos(), x = _a.x, y = _a.y;
    var textSize = graphics.getTextSize("Minimap", 7);
    var rectWidth = textSize.x + 300;
    var rectHeight = textSize.y + 295;
    rect.left = x;
    rect.top = y;
    rect.right = x + rectWidth;
    rect.bottom = y + rectHeight;
    graphics.fillRect(rect, new Color(0, 0, 0, 1));
    graphics.drawText(new Vector2(x, y), "Minimap", 7, Color.WHITE);
    minimapModule.setBounds(rectWidth, rectHeight);
    graphics.drawTexture(minimap, new Vector2(x, y), 300, 300, Color.WHITE);
    graphics.drawTexture(playerIcon, new Vector2(x + 150, y + 150), 10, 10, Color.WHITE);
});
client.getModuleManager().registerModule(minimapModule);
client.on('world-tick', function (evd) {
    counter++;
    var player = game.getLocalPlayer();
    var loc = player === null || player === void 0 ? void 0 : player.getPosition();
    if (loc && counter >= 20) {
        counter = 0;
        var index = Math.round(Math.random());
        var possiblyTextures = ["map_before.png", "map_after.png"];
        minimap = Texture.load(possiblyTextures[index]);
        writePlayerPositionToTxt(new Vector3(loc.x, loc.y, loc.z));
    }
});
function writePlayerPositionToTxt(position) {
    try {
        var txtContent = "".concat(position.x.toFixed(0), " ").concat(position.z.toFixed(0)); // Crear una cadena de texto con las coordenadas
        var buffer = util.stringToBuffer(txtContent); // Convertir la cadena en una secuencia de bytes
        fs.write('position.txt', buffer);
    }
    catch (error) {
        client.showNotification('Error al escribir la posición del jugador en position.txt: ' + error);
    }
}
