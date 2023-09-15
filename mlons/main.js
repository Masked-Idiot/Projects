import * as melon from "https://esm.run/melonjs";

melon.device.onReady(function () {
    if (!melon.video.init(800, 600, {parent : "game", scale : "auto"})) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }
    melon.game.world.backgroundColor.parseCSS("#202020");
    melon.game.world.addChild(new melon.Text(609, 281, {
        font: "Arial",
        size: 160,
        fillStyle: "#FFFFFF",
        textBaseline : "middle",
        textAlign : "center",
        text : "Hello World !"
    }));
});