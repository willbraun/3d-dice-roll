<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
	import Scene from '../lib/Scene.svelte';
	import Controller from '$lib/Controller.svelte';
	import { gravity } from '$lib/store';
</script>

<Controller />

<Canvas>
	<World bind:gravity={$gravity}>
		<Scene />
	</World>
</Canvas>
