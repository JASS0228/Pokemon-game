import { mount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions.vue'

import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {
	let wrapper

	beforeEach(() => {
		wrapper = mount(PokemonOptions, {
			props: {
				pokemons,
			},
		})
	})

	test('Debe de hacer match con la snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})

	test('Debe de mostrar las 4 opciones correctamente', () => {
		const listItems = wrapper.findAll('li')

		expect(listItems.length).toBe(4)

		expect(listItems[0].text()).toStrictEqual(pokemons[0].name)
		expect(listItems[1].text()).toStrictEqual(pokemons[1].name)
		expect(listItems[2].text()).toStrictEqual(pokemons[2].name)
		expect(listItems[3].text()).toStrictEqual(pokemons[3].name)
	})

	test('Debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {
		const [li1, li2, li3, li4] = wrapper.findAll('li')

		li1.trigger('click')
		li2.trigger('click')
		li3.trigger('click')
		li4.trigger('click')

		expect(wrapper.emitted().selectionPokemon.length).toBe(4)
		expect(wrapper.emitted().selectionPokemon[0]).toEqual([1])
		expect(wrapper.emitted().selectionPokemon[1]).toEqual([2])
		expect(wrapper.emitted().selectionPokemon[2]).toEqual([3])
		expect(wrapper.emitted().selectionPokemon[3]).toEqual([4])
	})
})
