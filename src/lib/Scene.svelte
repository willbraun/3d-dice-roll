<script lang="ts">
	import { PerspectiveCamera, OrbitControls, Three } from '@threlte/core';
	import { DirectionalLight } from 'three';
	import Ground from './Ground.svelte';
	import Dice from './Dice.svelte';
	import { unique } from './store';
</script>

<PerspectiveCamera position={{ x: 0, y: 12, z: 14 }} fov={60}>
	<OrbitControls />
</PerspectiveCamera>

<Three type={new DirectionalLight()} castShadow position={[3, 10, 3]} />

<Ground />

{#key $unique}
	<Dice position={{ x: -2, y: 5, z: 0 }} />
	<Dice position={{ x: 2, y: 5, z: 0 }} />
{/key}
