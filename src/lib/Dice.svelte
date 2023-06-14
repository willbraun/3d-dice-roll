<script lang="ts">
	import { derived } from 'svelte/store';
	import type { Mesh as ThreeMesh } from 'three';
	import { Mesh } from '@threlte/core';
	import type { Position } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { AutoColliders, RigidBody } from '@threlte/rapier';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';

	export let position: Position;

	const { gltf } = useGltf('/dice.glb');

	const diceMeshes = derived(gltf, (gltf) => {
		if (!gltf) return;
		const meshes: ThreeMesh[] = Object.values(gltf.nodes).filter((value) => value.type === 'Mesh');
		return meshes;
	});

	const randomAngle = () => Math.random() * 360 * DEG2RAD;
	const randomAngVel = () => ({
		x: randomAngle(),
		y: randomAngle(),
		z: randomAngle()
	});

	// let angVel = writable(randomAngVel())
	// let extra = writable(0)

	// function spin() {
	// 	extra.update(e => e + 0.02)
	// 	angVel.update(angVel => ({
	// 		x: angVel.x + (Math.sin($extra) * 0.01),
	// 		y: angVel.y,
	// 		z: angVel.z,
	// 	}))
	// 	requestAnimationFrame(spin)
	// 	console.log($extra)
	// }

	// if (browser) {
	// 	spin()
	// }
</script>

{#if $diceMeshes}
	<RigidBody type={'dynamic'} bind:position angularVelocity={randomAngVel()}>
		<AutoColliders shape={'cuboid'}>
			{#each $diceMeshes as diceMesh}
				<Mesh castShadow geometry={diceMesh.geometry} material={diceMesh.material} />
			{/each}
		</AutoColliders>
	</RigidBody>
{/if}
