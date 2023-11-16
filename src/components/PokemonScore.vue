<template>
	<div>
		<h1>Puntaje es:{{ score }}</h1>
		<p>Las preguntas correctas valen 10 puntos</p>
		<p>Las preguntas incorrectas te quitan 5 puntos</p>
	</div>
</template>
<script>
export default {
	props: {
		score: {
			type: Number,
			// required: true,
		},
	},
}
</script>

<style></style>
