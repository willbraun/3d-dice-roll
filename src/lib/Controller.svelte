<script lang="ts">
	import { gravity, noGravity, standardGravity, unique } from './store';

	const enableGravity = () => {
		gravity.set(standardGravity);
	};

	const reset = () => {
		gravity.set(noGravity);
		unique.set({});
	};
</script>

<div class="container">
	<button on:click={enableGravity}>Roll</button>
	<button on:click={reset}>Reset</button>
</div>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	.container {
		position: absolute;
		top: 0;
		right: 0;
		width: 10rem;
		padding: 1rem;

		button {
			width: 100%;
			font-size: 1.5rem;
			padding: 0.5rem;
			border: 1px solid #000;
			border-radius: 0.5rem;
		}

		button:not(:last-child) {
			margin: 0 0 1rem 0;
		}

		button:hover {
			cursor: pointer;
			filter: brightness(110%);
		}
	}
</style>
