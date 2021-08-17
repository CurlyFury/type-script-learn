interface Rect {
	readonly id: string
	color?: string
	size: {
		width: number
		height: number
	}
}

const rect1: Rect = {
	id: '64154',
	size: {
		width: 20,
		height: 30
	},
	color: 'ccc'
}

const rect2: Rect = {
	id: '685544',
	size: {
		width: 22,
		height: 10
	}
}
rect2.color = 'black'
// console.log(rect2)
const rect3 = {} as Rect

//==============

interface RectWithArea extends Rect {
	getArea: () => number
}

const rect5: RectWithArea = {
	id: '3dg335',
	size: {
		width: 23,
		height: 33
	},
	getArea(): number {
		return this.size.width * this.size.height
	}
}

//=================

interface IClock {
	time: Date
	setTime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date()

	setTime(date: Date): void {
		this.time = date
	}
}

//================
interface Styles {
	[key: string]: string
}

const css: Styles = {
	border: '1px solid black',
	borderRadius: '5px'
}