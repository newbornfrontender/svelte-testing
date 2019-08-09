<script>
  import Button from './components/Button/Button.svelte';

  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>

<Button />
