<script>
  export let name;
  let version;

  const get_version = async () => {
    version = await api.GetVersion();
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <button on:click|once={get_version}>
    Version: {version || "Get Version"}
  </button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
