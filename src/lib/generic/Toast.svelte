<script>
  import {fly} from 'svelte/transition'
  export let message = 'Ocorreu um erro'
</script>

<div  in:fly={{y: -500}} 
      out:fly={{x: 500}} 
      class="alert alert-danger position" role="alert">
  <h4 class="alert-heading">{message}</h4>
</div>

<style>
  .position {
    position: fixed;
    top: 1rem;
    right: 1rem;
  }
</style>