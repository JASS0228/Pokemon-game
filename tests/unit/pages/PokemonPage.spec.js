import { mount } from '@vue/test-utils'
import { pokemons } from '../mocks/pokemons.mock'
import PokemonPage from '@/pages/PokemonPage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

describe('PokemonPage component', () => {
	let wrapper

	beforeEach(() => {
		wrapper = mount(PokemonPage)
	})

	test('debe de hacer match con el snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})

	//Test a mounted de PokemonPage
	test('debe de llamar el mixPokemonArr al montar', () => {
		const mixPokemonArraySpy = jest.spyOn(
			PokemonPage.methods,
			'mixPokemonArray'
		)

		const wrapper = mount(PokemonPage)

		expect(mixPokemonArraySpy).toHaveBeenCalled()
	})

	test('debe de hacer match con la snapshot cuando carga los pokemons', () => {
		const wrapper = mount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[1],
					showPokemon: false,
					showAnswer: false,
					message: '',
				}
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
		const wrapper = mount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[1],
					showPokemon: false,
					showAnswer: false,
					message: '',
				}
			},
		})

		const wrapperPicture = mount(PokemonPicture, {
			props: {
				pokemonId: 2,
				showPokemon: false,
			},
		})

		const wrapperOptions = mount(PokemonOptions, {
			props: {
				pokemons,
			},
		})

		//PokemonPicture debe de existir
		expect(wrapper.find('.pokemon-container').exists()).toBeTruthy()

		//PokemonOptions debe de existir
		expect(wrapper.find('.options-container').exists()).toBeTruthy()

		//PokemonPicture debe tener el atributo pokemonId === 2
		expect(wrapperPicture.componentVM.pokemonId).toBe(2)

		//PokemonOptions debe de tener atributo pokemons to be True
		expect(wrapperOptions.componentVM.pokemons).toStrictEqual(pokemons)
	})

	test('pruebas en checkAnswer', async () => {
		const wrapper = mount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[1],
					showPokemon: false,
					showAnswer: false,
					message: '',
				}
			},
		})

		await wrapper.componentVM.checkAnswer({ selectedId: pokemons[1].id })

		expect(wrapper.find('h2').exists()).toBeTruthy()
	})
})
