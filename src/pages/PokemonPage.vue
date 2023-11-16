<template>
	<h1 v-if="!pokemon">Espere por favor...</h1>

	<div v-else>
		<h1>Quien es este Pokemon</h1>

		<PokemonPicture
			:pokemonId="pokemon.id"
			:showPokemon="showPokemon" />

		<PokemonOptions
			:pokemons="pokemonArr"
			:selected="showAnswer"
			@selection-pokemon="checkAnswer" />

		<template v-if="showAnswer">
			<h2 class="fade-in">
				{{ message }}
			</h2>
			<button @click="newGame">Nuevo Juego</button>
		</template>
	</div>

	<!-- <PokemonAnswers
		:correct="correctAnswer"
		:incorrect="incorrectAnswer" />

	<PokemonScore :score="score" /> -->
</template>
<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonAnswers from '@/components/PokemonAnswers.vue'
import PokemonScore from '@/components/PokemonScore.vue'

import getPokemonsOptions from '@/helpers/getPokemonOptions.js'

export default {
	components: {
		PokemonPicture,
		PokemonOptions,
		PokemonAnswers,
		PokemonScore,
	},
	data() {
		return {
			pokemonArr: [],
			pokemon: null,
			showPokemon: false,
			showAnswer: false,
			message: '',
			// correctAnswer: 0,
			// incorrectAnswer: 0,
			// score: 0,
		}
	},
	methods: {
		async mixPokemonArray() {
			this.pokemonArr = await getPokemonsOptions()

			const rndInt = Math.floor(Math.random() * 4)

			this.pokemon = this.pokemonArr[rndInt]
		},
		checkAnswer(selectedId) {
			this.showPokemon = true
			this.showAnswer = true

			if (selectedId === this.pokemon.id) {
				this.message = `Correcto, ${this.pokemon.name}`
				// this.correctAnswer++
				// this.score += 10
			} else {
				this.message = `Fallaste es ${this.pokemon.name}`
				// this.incorrectAnswer++
				// this.score -= 5
			}
		},
		newGame() {
			this.pokemonArr = []
			this.showAnswer = false
			this.showPokemon = false
			this.pokemon = null

			this.mixPokemonArray()
		},
	},
	mounted() {
		this.mixPokemonArray()
	},
}
</script>
