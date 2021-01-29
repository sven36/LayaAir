import PIXI from '../pixi5.2.js';
window.PIXI = PIXI;
import TweenManager from './TweenManager.js';
import Tween from './Tween.js';
import TweenPath from './TweenPath.js';
import Easing from './Easing.js';

//extend pixi graphics to draw tweenPaths
PIXI.Graphics.prototype.drawPath = function(path){
  path.parsePoints();
  this.drawShape(path.polygon);
  return this;
}

let tween = {
  TweenManager: TweenManager,
  Tween: Tween,
  Easing: Easing,
  TweenPath: TweenPath
};

if(!PIXI.tweenManager){
  PIXI.tweenManager = new TweenManager();

  PIXI.tween = tween;
}
export default tween;