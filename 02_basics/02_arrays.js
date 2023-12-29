const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeors = marvel_heros.concat(dc_heros)
// console.log(allHeors);

const all_heros = [...marvel_heros, ...dc_heros]

console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,  [4, 5]]]  