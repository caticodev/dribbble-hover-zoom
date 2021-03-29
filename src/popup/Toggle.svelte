<script lang="ts">
  let isActive = undefined;

  chrome.storage.sync.get(["active"], ({ active = true }) => {
    isActive = active;
  });
  const toggle = () => {
    isActive = !isActive;
    chrome.storage.sync.set({ active: isActive });
    chrome.tabs.query({ url: "*://dribbble.com/*" }, tabs => {
      tabs.map(({ id }) => chrome.tabs.sendMessage(id, { active: isActive }));
    });
  };
</script>

{#if isActive !== undefined}
  <div class="flex justify-end flex-grow">
    <label for="toogleButton" class="flex items-center cursor-pointer">
      <input
        id="toogleButton"
        type="checkbox"
        class="hidden"
        checked={isActive}
        on:change={toggle}
      />
      <div
        class="flex justify-between items-center bg-gray-200 border-2 border-white w-16 h-7 rounded-full shadow-inner 
    transition-colors"
      >
        <div class="relative w-full h-full">
          <div
            class="thumb absolute w-5 h-5 bg-white rounded-full shadow transition-all top-0 left-0 m-0.5"
          />
          <div class="font-bold mx-2 h-full flex items-center justify-between">
            <div class="label-on text-white transition-opacity opacity-0">
              ON
            </div>
            <div class="label-off text-gray-500 transition-opacity opacity-100">
              OFF
            </div>
          </div>
        </div>
      </div>
    </label>
  </div>
{/if}

<style type="text/scss">
  input[type="checkbox"]:checked ~ div {
    @apply bg-pink-400;

    .thumb {
      @apply left-9;
    }
    .label-on {
      @apply opacity-100;
    }
    .label-off {
      @apply opacity-0;
    }
  }
</style>
