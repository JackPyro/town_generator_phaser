import { Game, GameObjects, Scene } from "phaser";
import "./index.css";

// @ts-ignore
import logo from "./phaser.png";

class MainScene extends Scene {
  private logo: GameObjects.Sprite;

  public constructor() {
    super({ key: "MainScene" });
  }

  public preload(): void {
    this.load.image("logo", logo);
  }

  public create(): void {
    this.logo = this.add.sprite(400, 300, "logo");

    this.logo.setInteractive();

    this.input.setDraggable(this.logo);

    this.logo.on("pointerover", () => {
      this.logo.setTint(0x44ff44);
    });

    this.logo.on("pointerout", () => {
      this.logo.clearTint();
    });

    this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
      if (gameObject == this.logo) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      }
    });
  }
}

new Game({
  width: 800,
  height: 600,
  parent: "content",
  backgroundColor: 0x1099bb,
  scene: MainScene
});
