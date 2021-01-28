import * as PIXI from 'pixi.js';

class CircleEditPlot extends PIXI.Graphics {
    constructor(data) {
        this.data = Object.assign(this.getDefaultData(), data);
        this.setupEvents();
        this.interactive = !0;
        this.activePoint = null;
        this.createPoints();
        this.updatePoints();
    }
    createPoints() {
        this.points = [{
            x: this.data.position.x,
            y: this.data.position.y
        }, {
            x: this.data.position.x + Math.cos(1) * this.data.radius,
            y: this.data.position.y + Math.sin(1) * this.data.radius
        }]
    }
    setupEvents() {
        var _this2 = this;
        document.addEventListener("keydown", function (event) {
            "Enter" === event.key && _this2.dumpData()
        }),
            this.on("pointerdown", function (event) {
                _this2.onPlotDragStart(event)
            }),
            this.on("pointerup", function (event) {
                _this2.onPlotDragEnd(event)
            }),
            this.on("pointerupoutside", function (event) {
                _this2.onPlotDragEnd(event)
            }),
            this.on("pointermove", function (event) {
                _this2.onPlotDragMove(event)
            })
    }
    drawBack() {
        this.beginFill(38655, .25),
            this.drawRect(-this.data.width / 2, -this.data.height / 2, this.data.width, this.data.height)
    }
    updatePoints() {
        this.clear(),
            this.drawBack(),
            this.drawCircleShape(),
            this.drawPoints()
    }
    drawCircleShape() {
        this.beginFill(16711680, .25),
            this.drawShape(new PIXI.Circle(this.points[0].x, this.points[0].y, this.getRadius()))
    }
    drawPoints() {
        for (var i = 0; i < this.points.length; i++)
            this.drawPoint(this.points[i])
    }
    drawPoint(point) {
        this.activePoint === point ? this.beginFill(16777215, 1) : this.beginFill(65535, .5),
            this.drawCircle(point.x, point.y, 3)
    }
    onPlotDragStart(event) {
        this.activePoint && (this.dragPoint = !0)
    }
    onPlotDragMove(e) {
        if (this.dragPoint) {
            var pos = e.data.getLocalPosition(this)
                , delta_x = this.activePoint.x - pos.x
                , delta_y = this.activePoint.y - pos.y;
            this.activePoint.x = pos.x,
                this.activePoint.y = pos.y,
                this.activePoint === this.points[0] && (this.points[1].x -= delta_x,
                    this.points[1].y -= delta_y)
        } else
            this.activePoint = this.findNearPoint(e.data.getLocalPosition(this), 15);
        this.updatePoints()
    }
    onPlotDragEnd(e) {
        this.dragPoint = !1
    }
    findNearPoint(point, maxDistance) {
        for (var nearPoint = null, i = 0; i < this.points.length; i++) {
            var dist = this.getDistanceBetween(point, this.points[i]);
            maxDistance && maxDistance < dist || (nearPoint ? dist < this.getDistanceBetween(point, nearPoint) && (nearPoint = this.points[i]) : nearPoint = this.points[i])
        }
        return nearPoint
    }
    getDistanceBetween(p1, p2) {
        return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y))
    }
    dumpData() { }
    getRadius() {
        return Math.round(this.getDistanceBetween(this.points[0], this.points[1]))
    }
    getDefaultData(data) {
        return {
            width: 1e3,
            height: 1e3
        }
    }
}

export default CircleEditPlot;


