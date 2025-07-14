export const fruits = [
	"apple",
	"banana",
	"orange",
	"lime",
	"fig",
	"apricot",
	"lemon",
	"strawberry",
	"green-apple",
	"peach",
	"grape",
	"watermellon",
	"plum",
	"pear",
	"cherry",
	"raspberry",
	"passion",
	"yellow-cherry",
] as const;

export type Fruit = typeof fruits[number];