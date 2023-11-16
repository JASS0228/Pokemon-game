<template>
	<div class="respuestas">
		<h3 class="correcto">Respuesta Correctas: {{ correct }} <span>✔</span></h3>
		<h3 class="incorrecto">
			Repuestas Incorrectas: {{ incorrect }}
			<span>X</span>
		</h3>
	</div>
</template>
<script>
export default {
	props: {
		correct: {
			type: Number,
			// required: true,
		},
		incorrect: {
			type: Number,
			// required: true,
		},
	},
}
</script>

<style scoped>
.respuestas {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
}
.respuestas h3 {
	font-size: 18px;
	font-weight: bold;
}

.correcto span {
	color: green;
	font-size: 23px;
}

.incorrecto span {
	color: red;
	font-size: 23px;
}
</style>
