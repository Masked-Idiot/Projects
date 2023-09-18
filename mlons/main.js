import * as melon from "https://esm.run/melonjs";

melon.device.onReady(function () {
    if (!melon.video.init(640, 480, {parent : "game", scale : "auto"})) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }
    melon.game.world.backgroundColor.parseCSS("#202020");
    melon.game.world.addChild(new melon.ImageLayer(0, 0, {
        image: "melons"
    }));
});