import PIXI from '../../pixi5.2.js';


class PolygonEditPlot extends PIXI.Graphics {
    constructor(data) {
        super();
        this.data = Object.assign(this.getDefaultData(), data);
        this.setupEvents();
        this.position = _this.data.position;
        this.interactive = !0;
        this.activePoint = null;
        this.createLabel();
        this.createPoints();
        this.updatePoints();
    }
    createPoints() {
        this.points = [];
        for (var i = 0; i < this.data.vertexes.length; i += 2)
            this.points.push({
                x: this.data.vertexes[i],
                y: this.data.vertexes[i + 1]
            })
    }
    createLabel() {
        this.label = new PIXI.Text("", {
            fontFamily: "Arial",
            fontSize: 14,
            fill: "black",
            stroke: "white",
            strokeThickness: 3
        }),
            this.addChild(this.label)
    }
    setupEvents() {
        var _this2 = this;
        document.addEventListener("keydown", function (event) {
            var keyName = event.key;
            "Enter" === keyName && _this2.dumpData(),
                "Delete" === keyName && _this2.activePoint && _this2.deletePoint(_this2.activePoint)
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
        var min = {
            x: 0,
            y: 0
        }
            , max = {
                x: 0,
                y: 0
            };
        this.points[0] && (min.x = this.points[0].x,
            min.y = this.points[0].y,
            max.x = this.points[0].x,
            max.y = this.points[0].y),
            this.points.forEach(function (point) {
                min.x = point.x < min.x ? point.x : min.x,
                    min.y = point.y < min.y ? point.y : min.y,
                    max.x = point.x > max.x ? point.x : max.x,
                    max.y = point.y > max.y ? point.y : max.y
            }),
            this.beginFill(38655, .25),
            this.drawRect(min.x - 250, min.y - 250, max.x - min.x + 500, max.y - min.y + 500)
    }
    insertPointNearPoint(point, nearPoint) {
        var index = this.points.indexOf(nearPoint);
        if (this.points.length < 2)
            this.points.push(point);
        else {
            var indexPrev = 0 === index ? this.points.length - 1 : index - 1
                , indexNext = index === this.points.length - 1 ? 0 : index + 1
                , prev = this.points[indexPrev]
                , next = this.points[indexNext]
                , insertIndex = 0;
            this.getDistanceFromPointToLine(prev, nearPoint, this.cursorPoint) < this.getDistanceFromPointToLine(next, nearPoint, this.cursorPoint) ? (insertIndex = Math.max(index, indexPrev),
                (0 === index && indexPrev === this.points.length - 1 || 0 === indexPrev && index === this.points.length - 1) && (insertIndex = 0)) : (insertIndex = Math.max(index, indexNext),
                    (0 === index && indexNext === this.points.length - 1 || 0 === indexNext && index === this.points.length - 1) && (insertIndex = 0)),
                this.points.splice(insertIndex, 0, point)
        }
        this.updatePoints()
    }
    deletePoint(point) {
        this.points = this.points.filter(function (_point) {
            return _point !== point
        }),
            this.activePoint = null,
            this.updatePoints()
    }
    updatePoints() {
        this.clear(),
            this.drawBack(),
            this.drawPointsPolygon(),
            this.drawPoints(),
            this.drawLines()
    }
    drawPointsPolygon() {
        this.beginFill(16711680, .25);
        for (var vertexes = [], i = 0; i < this.points.length; i++)
            vertexes.push(this.points[i].x, this.points[i].y);
        this.drawShape(new PIXI.Polygon(vertexes))
    }
    drawPoints() {
        for (var i = 0; i < this.points.length; i++)
            this.drawPoint(this.points[i]);
        this.endFill(),
            this.drawLabel()
    }
    drawLines() {
        if (this.cursorPoint) {
            var point = this.findNearPoint(this.cursorPoint)
                , index = this.points.indexOf(point)
                , indexPrev = 0 === index ? this.points.length - 1 : index - 1
                , indexNext = index === this.points.length - 1 ? 0 : index + 1
                , prev = this.points[indexPrev]
                , next = this.points[indexNext]
                , distPrev = this.getDistanceFromPointToLine(prev, point, this.cursorPoint)
                , distNext = this.getDistanceFromPointToLine(next, point, this.cursorPoint);
            this.lineStyle(2, 16480238, 1),
                this.moveTo(point.x, point.y),
                distPrev < distNext ? this.lineTo(prev.x, prev.y) : this.lineTo(next.x, next.y),
                this.endFill()
        }
    }
    getDistanceFromPointToLine(p1, p2, p) {
        return this.getScalar(p1, p2, p) < 0 ? this.getDistanceBetween(p2, p) : Math.abs((p2.y - p1.y) * p.x - (p2.x - p1.x) * p.y + p2.x * p1.y - p2.y * p1.x) / this.getDistanceBetween(p1, p2)
    }
    getScalar(p1, p2, p) {
        var _p1_x = p1.x - p2.x
            , _p1_y = p1.y - p2.y;
        return (p.x - p2.x) * _p1_x + (p.y - p2.y) * _p1_y
    }
    drawLabel() {
        this.label.visible = !1,
            this.activePoint && (this.label.text = this.points.indexOf(this.activePoint) + ":  " + Math.round(this.activePoint.x) + " " + Math.round(this.activePoint.y),
                this.label.position = {
                    x: this.activePoint.x + 10,
                    y: this.activePoint.y - 20
                },
                this.label.visible = !0)
    }
    drawPoint(point) {
        this.activePoint === point ? this.beginFill(16777215, 1) : this.beginFill(65535, .5),
            this.drawCircle(point.x, point.y, 3)
    }
    onPlotDragStart(event) {
        var point = null;
        if (this.activePoint)
            point = this.activePoint;
        else {
            var pos = event.data.getLocalPosition(this);
            point = {
                x: pos.x,
                y: pos.y
            },
                this.insertPointNearPoint(point, this.findNearPoint(point)),
                this.activePoint = point
        }
        point && (this.dragPoint = !0)
    }
    onPlotDragMove(e) {
        if (this.cursorPoint = e.data.getLocalPosition(this),
            this.dragPoint) {
            var pos = e.data.getLocalPosition(this);
            this.activePoint.x = pos.x,
                this.activePoint.y = pos.y
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
    dumpData() {
        for (var out = [], i = 0; i < this.points.length; i++)
            out.push(Math.round(this.points[i].x), Math.round(this.points[i].y))
    }
    getDefaultData(data) {
        return {}
    }
}

export default PolygonEditPlot;