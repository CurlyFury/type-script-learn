var rect1 = {
    id: '64154',
    size: {
        width: 20,
        height: 30
    },
    color: 'ccc'
};
var rect2 = {
    id: '685544',
    size: {
        width: 22,
        height: 10
    }
};
rect2.color = 'black';
// console.log(rect2)
var rect3 = {};
var rect5 = {
    id: '3dg335',
    size: {
        width: 23,
        height: 33
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(rect5.getArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    borderRadius: '5px'
};
