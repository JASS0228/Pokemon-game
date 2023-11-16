import pokemonAPi from '@/api/PokemonApi'

export const getPokemons = () => {
	//Creamos el array con 650 elementos
	const pokemonsArr = Array.from(Array(650))

	//Hacemos un return con un map para llenar eso datos del arreglo y sumar su posiciones de indice para sacar a cada pokemon por su id
	return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonsOptions = async () => {
	const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)

	const pokemons = await getPokemonName(mixedPokemons.splice(0, 4))

	return pokemons
}

export const getPokemonName = async ([a, b, c, d] = []) => {
	// const resp = await pokemonAPi.get('/2')
	// console.log(resp.data.name, resp.data.id)
	// console.log(a, b, c, d)

	const arrPromises = [
		pokemonAPi.get(`/${a}`),
		pokemonAPi.get(`/${b}`),
		pokemonAPi.get(`/${c}`),
		pokemonAPi.get(`/${d}`),
	]

	const [p1, p2, p3, p4] = await Promise.all(arrPromises)

	return [
		{ name: p1.data.name, id: p1.data.id },
		{ name: p2.data.name, id: p2.data.id },
		{ name: p3.data.name, id: p3.data.id },
		{ name: p4.data.name, id: p4.data.id },
	]
}

export default getPokemonsOptions
