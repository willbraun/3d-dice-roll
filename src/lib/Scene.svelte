<script lang="ts">
	import { DirectionalLight, OrbitControls, PerspectiveCamera, Three } from '@threlte/core';
	import { Debug } from '@threlte/rapier';
	import { GridHelper } from 'three';
	import Ground from './Ground.svelte';
	import Dice from './Dice.svelte';
	import { unique } from './store';
</script>

<PerspectiveCamera position={{ x: 0, y: 14, z: 14 }}>
	<OrbitControls />
</PerspectiveCamera>

<DirectionalLight shadow position={{ x: 8, y: 20, z: 3 }} />

<Three type={new GridHelper(30)} />

<Ground />

<Debug />

{#key $unique}
	<Dice position={{ x: -2, y: 5, z: 0 }} />
	<Dice position={{ x: 2, y: 5, z: 0 }} />
{/key}
