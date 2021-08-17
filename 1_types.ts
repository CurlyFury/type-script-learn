
const isLoading: boolean = false

let int: number = 42
/* int='' */  //still a constant
const float: number = 42.5
const numm: number = 3e6

const message: string = 'Hello TypeScript'

const numArr: number[] = [1, 1, 2, 3, 5, 8, 13]
const numArr2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'TypeScript']

//Tuple
const contact: [string, number] = ['John', 548751]

//Any
let variable: any = 42
//...
variable = 'String'
variable = []

//=======
function sayName(name: string): void {
	console.log(name)
}
sayName('Dennis')


//====== Type
type ID = string | number
const user: ID = 1596
const user2: ID = 'catLover954'
/* const user3: ID = true */ //error

