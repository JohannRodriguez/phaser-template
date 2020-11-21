import 'phaser';
import config from '../Config/config';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  create () {
    this.add.image(config.width / 2, config.height / 2, 'phaserLogo');
  }

  update () {
  }
};