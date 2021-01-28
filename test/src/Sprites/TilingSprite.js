import Sprite from '../Playable/Core/Sprite';

class TilingSprite extends Sprite {
    setup() {
        _get(TilingSprite.prototype.__proto__ || Object.getPrototypeOf(TilingSprite.prototype), "setup", this).call(this);
        var _config = this.config
            , tileImage = _config.tileImage
            , width = _config.width
            , height = _config.height
            , tint = _config.tint
            , _config$tilePosition = _config.tilePosition
            , tilePosition = void 0 === _config$tilePosition ? {
                x: 0,
                y: 0
            } : _config$tilePosition
            , _config$tileScale = _config.tileScale
            , tileScale = void 0 === _config$tileScale ? {
                x: 1,
                y: 1
            } : _config$tileScale
            , _config$tileRotation = _config.tileRotation
            , tileRotation = void 0 === _config$tileRotation ? 0 : _config$tileRotation
            , _config$tilePivot = _config.tilePivot
            , tilePivot = void 0 === _config$tilePivot ? {
                x: 0,
                y: 0
            } : _config$tilePivot;
        this.tilingSprite = this.addChild(new PIXI.TilingSprite(utils.getTexture(tileImage), width, height)),
            this.tilingSprite.tilePosition = tilePosition,
            this.tilingSprite.tileScale = tileScale,
            this.tilingSprite.tint = tint,
            this.tilingSprite.tileTransform.rotation = tileRotation,
            this.tilingSprite.tileTransform.pivot = tilePivot
    }
    key: "getDefaultConfig",
    getDefaultConfig(config) {
        var image = config.image;
        return config.image = null,
            Object.assign(_get(TilingSprite.prototype.__proto__ || Object.getPrototypeOf(TilingSprite.prototype), "getDefaultConfig", this).call(this, config), {
                tileImage: image
            })
    }
}
export default TilingSprite;
