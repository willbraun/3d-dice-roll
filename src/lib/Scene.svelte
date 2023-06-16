<script lang="ts">
	import * as Threlte from '@threlte/core';
	import { Debug } from '@threlte/rapier';
	import * as THREE from 'three';
	import Ground from './Ground.svelte';
	import Dice from './Dice.svelte';
	import { unique } from './store';
</script>

<Threlte.PerspectiveCamera position={{ x: 0, y: 12, z: 14 }} fov={60}>
	<Threlte.OrbitControls />
</Threlte.PerspectiveCamera>

<Threlte.Three type={new THREE.DirectionalLight()} castShadow position={[3, 10, 3]} />

<Ground />

<Debug />

{#key $unique}
	<Dice position={{ x: -2, y: 5, z: 0 }} />
	<Dice position={{ x: 2, y: 5, z: 0 }} />
{/key}
