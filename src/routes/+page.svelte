<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
	import Scene from '../lib/Scene.svelte';
	import Controller from '../lib/Controller.svelte';
	import { gravity } from '../lib/store';
</script>

<Controller />

<Canvas>
	<World bind:gravity={$gravity}>
		<Scene />
	</World>
</Canvas>

<svelte:head>
	<title>3D Dice Roll</title>
	<meta name="description" content="Roll dice in 3D." />
</svelte:head>
