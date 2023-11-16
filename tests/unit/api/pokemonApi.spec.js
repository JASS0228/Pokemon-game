import pokemonAPi from '@/api/PokemonApi.js'

describe('Pokemon Api', () => {
	test('axios debe de estar configurado con el api de pokemon', () => {
		expect(pokemonAPi.defaults.baseURL).toBe(
			'https://pokeapi.co/api/v2/pokemon'
		)
	})
})
