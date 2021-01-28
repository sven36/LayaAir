import PolygonEditPlot from './PolygonEditPlot';
import CircleEditPlot from './CircleEditPlot';


class HitAreaBehavior {
    static hitAreaBehavior(behavior) {
        var data = Object.assign(HitAreaBehavior._getDefaultHitAreaData(), this.config.hitAreaData);
        if (data.visible || data.edit)
            switch (data.type) {
                case "circle":
                    this.addChild(new CircleEditPlot(data));
                    break;
                case "polygon":
                    this.addChild(new PolygonEditPlot(data))
            }
        else
            this.hitArea = HitAreaBehavior._createShape(data)
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
    static _getDefaultHitAreaData() {
        return {
            visible: !1,
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
export default HitAreaBehavior;