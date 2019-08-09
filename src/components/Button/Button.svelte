<script>
  let count = 0;

  function handleClick() {
    count++;
  }
</script>

<button on:click={handleClick}>Clicked {count} times</button>
