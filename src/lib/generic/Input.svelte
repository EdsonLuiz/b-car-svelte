<script>
  export let value
  export let placeholder
  export let type = 'text'

  function typeAction(node) {
    node.type = type
  }

  function dynamicPlaceholder(node) {
    if(type !== 'color') {
      node.placeholder = placeholder
    }
  }
</script>

<div class="col mb-3">
  <input 
    bind:value 
    use:typeAction
    class="form-control" 
    class:form-control-color={type === 'color'}
    use:dynamicPlaceholder
    >
</div>