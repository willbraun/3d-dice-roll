
<script lang="ts">
  import {
		DirectionalLight,
		OrbitControls,
		PerspectiveCamera,
		Three
	} from '@threlte/core'
	import { Debug, Attractor } from '@threlte/rapier'
	import { GridHelper } from 'three'
  import Ground from './Ground.svelte'
	import Dice from './Dice.svelte'


</script>

<PerspectiveCamera position={{ y: 10, z: 10, x: 10 }}>
	<OrbitControls />
</PerspectiveCamera>

<DirectionalLight shadow position={{ x: 8, y: 20, z: -3 }}/>

<Three type={new GridHelper(10)} />

<Ground />

<Debug />

<Dice />