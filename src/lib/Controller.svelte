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
	{#if $gravity.y}
		<button on:click={reset}>Reset</button>
	{:else}
		<button on:click={enableGravity}>Roll</button>
	{/if}
</div>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	.container {
		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
		width: 20rem;
		padding: 1rem;

		button {
			width: 100%;
			font-size: 2rem;
			color: #000;
			padding: 0.5rem;
			border: 1px solid #000;
			border-radius: 0.5rem;
			transition: 0.1s;
			box-shadow: 0 3px 5px 1px #555;
		}

		button:hover {
			cursor: pointer;
		}

		button:active {
			transform: translateY(2px);
			box-shadow: 0 1px 3px 1px #555;
		}
	}
</style>
