<script lang="ts">
	import { PerspectiveCamera, OrbitControls, Three } from '@threlte/core';
	import * as THREE from 'three';
	import Ground from './Ground.svelte';
	import Dice from './Dice.svelte';
	import { unique } from './store';

	const size = 20;
	const light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(2, 10, 2);
	light.castShadow = true;
	light.shadow.mapSize.width = 2048;
	light.shadow.mapSize.height = 2048;
	light.shadow.camera.left = -size;
	light.shadow.camera.right = size;
	light.shadow.camera.top = size;
	light.shadow.camera.bottom = -size;
	light.shadow.camera.near = 0.1;
	light.shadow.camera.far = 500;
</script>

<PerspectiveCamera position={{ x: 0, y: 12, z: 14 }} fov={75}>
	<OrbitControls />
</PerspectiveCamera>

<Three type={light} />

<Ground />

{#key $unique}
	<Dice position={{ x: -2, y: 5, z: 0 }} />
	<Dice position={{ x: 2, y: 5, z: 0 }} />
{/key}
