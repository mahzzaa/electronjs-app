<script>
  let { name } = $props();
  let version = $state();
  let clickCount = $state(0);

  // Test $derived rune - reactive computation
  let greeting = $derived(`Hello ${name}! You clicked ${clickCount} times`);
  let versionStatus = $derived(version ? `Version: ${version}` : "Click to get version");
  let isEvenClicks = $derived(clickCount % 2 === 0);

  const get_version = async () => {
    version = await api.GetVersion();
    clickCount++;
  };
</script>

<main>
  <h1>{greeting}</h1>
  <p class="status" class:even={isEvenClicks} class:odd={!isEvenClicks}>
    Status: {isEvenClicks ? 'Even clicks' : 'Odd clicks'}
  </p>
  <button onclick={get_version}>
    {versionStatus}
  </button>
  <div class="info">
    <p>Version: {version || 'Not loaded yet'}</p>
    <p>Click count: {clickCount}</p>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 400px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2.5em;
    font-weight: 100;
    margin-bottom: 1em;
  }

  .status {
    font-size: 1.2em;
    margin: 1em 0;
    padding: 0.5em;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .status.even {
    background-color: #e8f5e8;
    color: #2d5a2d;
  }

  .status.odd {
    background-color: #f5e8e8;
    color: #5a2d2d;
  }

  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 1em 2em;
    font-size: 1em;
    border-radius: 4px;
    cursor: pointer;
    margin: 1em 0;
  }

  button:hover {
    background: #e6350a;
  }

  .info {
    margin-top: 2em;
    padding: 1em;
    background: #f8f8f8;
    border-radius: 4px;
  }

  .info p {
    margin: 0.5em 0;
    font-family: monospace;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
