function add(a: number, b: number): number {
	return a + b
}

function toUppCs(srt: string): string {
	return srt.trim().toLocaleUpperCase()
}

//=============

interface Position {
	x: number | undefined
	y: number | undefined
}

interface PositionWithDefault extends Position {
	default: string
}

function position(): Position
function position(a: number): PositionWithDefault
function position(a: number, b: number): Position

function position(a?: number, b?: number) {

	if (!a && !b) {
		return { x: undefined, y: undefined }
	}

	if (a && !b) {
		return { x: a, y: undefined, default: a.toString() }
	}

	return { x: a, y: b }

}

console.log('Empty:', position())
console.log('One param:', position(42))
console.log('Two params:', position(13, 17))