<script>
  import {fly} from 'svelte/transition'
  export let message = 'Ocorreu um erro'

  function autoRemove(node) {
    const setTimeoutReference = setTimeout(() => {
      node.remove()
    }, 3000);

    return {
      destroy() {clearTimeout(setTimeoutReference)}
    }
  }
</script>

<div use:autoRemove in:fly={{y: -500}} class="alert alert-danger position" role="alert">
  <h4 class="alert-heading">{message}</h4>
</div>
<style>
  .position {
    position: fixed;
    top: 1rem;
    right: 1rem;
  }
</style>