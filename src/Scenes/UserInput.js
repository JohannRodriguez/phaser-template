import 'phaser';
import config from '../Config/config';

export default class UserInput extends Phaser.Scene {
  constructor () {
    super('UserInput');
  }

  create () {
    this.name = this.add.text(10, 20, 'Your name', {
      font: '40px Arial',
      fill: '#ffffff',
      align: 'center',
    });
    this.form = this.add.dom(config.width / 2, config.height / 2).createFromCache('nameForm');
    this.submitBtn = this.add.image(config.width / 2, (config.height / 2) + 100, 'blueButton1').setInteractive();


    this.submitBtn.on('pointerdown', () => {
      const usrInput = document.getElementById('nameField');
      this.name.setText(usrInput.value);
      usrInput.value = '';
    });
  }
}