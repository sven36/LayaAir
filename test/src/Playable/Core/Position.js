import * as PIXI from 'pixi.js'

class Position extends PIXI.Point {
    constructor(data) {
        this.data = Object.assign(Position.getDefaultData(), data);
    }
    calculateFor(object) {
        return object.parent && (this.applyAlign(object),
            this.applyOffset(),
            this.data.ignoreAnchor || this.applyObjectSize(object),
            object.parent.anchor && this.applyObjectParentSize(object.parent),
            this.data.roundPosition && this.round()),
            this.clone()
    }
    applyAlign(object) {
        var parentSize = this.getParentSize(object)
            , align = this.data.centered ? {
                x: .5,
                y: .5
            } : this.data.align
            , point = new PIXI.Point((parentSize.width - object.origWidth) * align.x, (parentSize.height - object.origHeight) * align.y);
        this.data.absolute && (point = object.parent.toLocal(point)),
            this.copyFrom(point)
    }
    getParentSize(object) {
        return this.data.absolute ? {
            width: object.app.width,
            height: object.app.height
        } : {
                width: object.parent.origWidth,
                height: object.parent.origHeight
            }
    }
    applyOffset() {
        this.x += this.data.x,
            this.y += this.data.y
    }
    applyObjectSize(object) {
        this.x += object.anchor.x * object.origWidth,
            this.y += object.anchor.y * object.origHeight
    }
    applyObjectParentSize(parent) {
        this.x -= parent.origWidth * parent.anchor.x,
            this.y -= parent.origHeight * parent.anchor.y
    }
    round() {
        this.x = Math.round(this.x),
            this.y = Math.round(this.y)
    }
    static createPositionsFromConfig(config) {
        var positions = {};
        for (var key in config)
            "position" === key.substr(0, 8) && (positions[Position.getPositionNameFromKey(key)] = "string" == typeof config[key] ? positions[Position.getPositionNameFromKey(config[key])] : new Position(config[key]));
        return positions[Position.DEFAULT_NAME] || (positions[Position.DEFAULT_NAME] = new Position),
            positions[Position.PORTRAIT_NAME] || (positions[Position.PORTRAIT_NAME] = positions[Position.DEFAULT_NAME]),
            positions
    }
    static getPositionNameFromKey(key) {
        var name = key.substr(9);
        return name.length ? name : Position.DEFAULT_NAME
    }
    static getDefaultData() {
        return {
            absolute: !1,
            align: {
                x: 0,
                y: 0
            },
            centered: !1,
            roundPosition: !1,
            x: 0,
            y: 0
        }
    }
    static get DEFAULT_NAME() {
        return "default"
    }
    static get PORTRAIT_NAME() {
        return "portrait"
    }
}

export default Position