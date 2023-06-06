
<script lang="ts">
  import {
		DirectionalLight,
		Object3DInstance,
		OrbitControls,
		PerspectiveCamera
	} from '@threlte/core'
	import { Debug } from '@threlte/rapier'
	import { GridHelper } from 'three'
  import Ground from './Ground.svelte'
	import Dice from './Dice.svelte'
</script>

<PerspectiveCamera position={{ y: 10, z: 10, x: 10 }}>
	<OrbitControls />
</PerspectiveCamera>

<DirectionalLight shadow position={{ x: 8, y: 20, z: -3 }}/>

<Object3DInstance object={new GridHelper(10)}/>

<Ground />

<Dice />