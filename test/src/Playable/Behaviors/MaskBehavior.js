
import PIXI from '../../pixi5.2.js';
import PolygonEditPlot from './PolygonEditPlot.js';
import CircleEditPlot from './CircleEditPlot.js';


class MaskBehavior {
    static maskBehavior(behavior) {
        var data = Object.assign(MaskBehavior._getDefaultMaskData(), this.config.maskData);
        if (data.visible || data.edit)
            switch (data.type) {
                case "circle":
                    this.addChild(new CircleEditPlot(data));
                    break;
                case "polygon":
                    this.addChild(new PolygonEditPlot(data))
            }
        else {
            var graphics = MaskBehavior._createGraphics(MaskBehavior._createShape(data), data);
            this.addChild(graphics),
                this.mask = graphics
        }
    }
    static _createShape(data) {
        switch (data.type) {
            case "circle":
                return new PIXI.Circle(data.position.x, data.position.y, data.radius);
            case "polygon":
                var _vertexes = data.vertexes.map(function (value, index) {
                    return value + (index % 2 == 0 ? data.position.x : data.position.y)
                });
                return new PIXI.Polygon(_vertexes)
        }
    }
    static _createGraphics(shape, data) {
        var g = new PIXI.Graphics;
        return g.beginFill(data.color, data.alpha),
            g.drawShape(shape),
            g
    }
    static _getDefaultMaskData() {
        return {
            visible: !1,
            edit: !1,
            alpha: .3,
            color: 16711680,
            type: "polygon",
            position: {
                x: 0,
                y: 0
            },
            radius: 50,
            vertexes: [0, 0, 0, 100, 100, 100, 100, 0]
        }
    }
}

export default MaskBehavior;