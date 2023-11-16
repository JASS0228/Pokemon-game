module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	transform: {
		'^.+\\.vue$': 'vue3-jest',
		'^.+\\js$': 'babel-jest',
	},
	moduleNameMapper: {
		axios: 'axios/dist/node/axios.cjs',
	},
}
