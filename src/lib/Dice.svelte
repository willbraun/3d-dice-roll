<script lang="ts">
	import { derived } from 'svelte/store';
	import type { Mesh as ThreeMesh } from 'three';
	import { Mesh } from '@threlte/core';
	import type { Position } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { AutoColliders, RigidBody } from '@threlte/rapier';
	import { browser } from '$app/environment';
	import { gravity } from './store';

	export let position: Position;

	const { gltf } = useGltf('/dice.glb');

	const diceMeshes = derived(gltf, (gltf) => {
		if (!gltf) return;
		const meshes: ThreeMesh[] = Object.values(gltf.nodes).filter((value) => value.type === 'Mesh');
		return meshes;
	});

	const randomValue = (low: number, high: number) => low + Math.random() * (high - low);

	let speed = randomValue(4, 5);
	let angularVelocity = {
		x: speed,
		y: speed,
		z: speed,
	};
	let t = 0;
	let tOffset = randomValue(0, Math.PI);
	let tSpeed = randomValue(0.07, 0.13);

	function oscillate() {
		if ($gravity.y) return;

		angularVelocity.x = Math.sin(t + tOffset) * speed;
		t += tSpeed;
		requestAnimationFrame(oscillate);
	}

	if (browser && !$gravity.y) {
		oscillate();
	}
</script>

{#if $diceMeshes}
	<RigidBody type={'dynamic'} bind:position bind:angularVelocity>
		<AutoColliders shape={'cuboid'}>
			{#each $diceMeshes as diceMesh}
				<Mesh castShadow geometry={diceMesh.geometry} material={diceMesh.material} />
			{/each}
		</AutoColliders>
	</RigidBody>
{/if}
