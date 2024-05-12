import subprocess
import time
from PIL import Image

output_path = '../map_render.png'

# Función para ejecutar el comando
def run_command():
    with open('../position.txt', 'r') as coords:
        pos = coords.read().strip()
        x, z = pos.split(' ')
        startX = int(x) - 49
        startZ = int(z) - 49
        print(startX, startZ)
        cmd = f'unmined-cli image render --world "C:\\Users\\sandr\\AppData\\Local\\packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\minecraftWorlds\\7GlAZv0wgwA=" --output  "{output_path}" --zoom=2 --area=b({startX},{startZ},101,101)'
        subprocess.run(cmd, shell=True)
        flipX1()
        flipX2()

# Función para voltear horizontalmente la imagen
def flipX1():
    try:
        output = Image.open(output_path)
        flipped_img = output.transpose(Image.FLIP_LEFT_RIGHT)
        flipped_img = flipped_img.transpose(Image.FLIP_TOP_BOTTOM)  # Usar flipped_img en lugar de output
        flipped_img.save('../map_before.png')
        print('FLIPPED IMG')
    except Exception as e:
        print(f"Error al voltear la imagen: {e}")
def flipX2():
    try:
        output = Image.open(output_path)
        flipped_img = output.transpose(Image.FLIP_LEFT_RIGHT)
        flipped_img = flipped_img.transpose(Image.FLIP_TOP_BOTTOM)  # Usar flipped_img en lugar de output
        flipped_img.save('../map_after.png')
        print('FLIPPED IMG')
    except Exception as e:
        print(f"Error al voltear la imagen: {e}")
# Ejecutar el comando cada 3 segundos
while True:
    run_command()