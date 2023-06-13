<script lang="ts">
  import { Canvas } from '@threlte/core'
  import { World } from '@threlte/rapier'
  import Scene from '../lib/Scene.svelte'
</script>

<Canvas>
  <World gravity={{ y: 0}}>
    <Scene />
  </World>
</Canvas>