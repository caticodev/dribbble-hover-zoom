<script>
  import Logo from "./icons/Logo.svelte";
  import Dribbble from "./icons/Dribbble.svelte";
  import Bug from "./icons/Bug.svelte";
  import Coffee from "./icons/Coffee.svelte";
  import Github from "./icons/Github.svelte";
  import Heart from "./icons/Heart.svelte";
  import Mail from "./icons/Mail.svelte";
  import Star from "./icons/Star.svelte";
  import Toggle from "./Toggle.svelte";
</script>

<main class="w-96 text-gray-700 shadow-2xl ">
  <div class="bg-pink-400 p-4 flex items-center">
    <Logo class="w-14 h-14" />
    <h1 class="text-lg text-white ml-4">
      <Dribbble class="w-20 h-6" />
      shot hover preview
    </h1>
    <Toggle />
  </div>
  <div class="px-4 py-5 text-base">
    <h2 class="text-lg flex items-center mb-5">
      <Bug class="text-pink-500 stroke-current stroke-4 w-7 h-7 mr-3" />
      Found a bug or have a suggestion?
    </h2>
    <div class="flex justify-around items-center">
      <a
        target="_blank"
        href="mailto:caticoapps@gmail.com"
        class="group flex items-center hover:text-pink-500 transition-colors"
      >
        <Mail
          class="opacity-50 group-hover:opacity-100 transition-opacity stroke-current stroke-5 w-5 h-5 mr-1.5"
        />
        Email me</a
      >
      <a
        target="_blank"
        href="https://github.com/cat-ico/dribbble-hover-zoom/issues/new"
        class="group flex items-center hover:text-pink-500 transition-colors"
      >
        <Github
          class="opacity-50 group-hover:opacity-100 transition-opacity stroke-current stroke-5 w-5 h-5 mr-1.5"
        />
        Open an issue</a
      >
    </div>
  </div>
  <div class="px-4 py-5 bg-gray-100 text-base">
    <h2 class="text-lg flex items-center mb-5">
      <Heart class="text-pink-500 stroke-current stroke-4 w-7 h-7 mr-3" />
      Like this extension?
    </h2>
    <div class="flex justify-around items-center">
      <a
        target="_blank"
        href="https://chrome.google.com/webstore/detail/dribbble-shot-hover-previ/kpokkmehdkmcnfiknnjlnjmppnpfnhkh/reviews"
        class="group flex items-center hover:text-pink-500 transition-colors"
      >
        <Star
          class="opacity-50 group-hover:opacity-100 transition-opacity stroke-current stroke-5 w-5 h-5 mr-1.5"
        />
        Rate it</a
      >
      <a
        target="_blank"
        href="https://ko-fi.com/catico_apps"
        class="group flex items-center hover:text-pink-500 transition-colors"
      >
        <Coffee
          class="opacity-50 group-hover:opacity-100 transition-opacity stroke-current stroke-5 w-5 h-5 mr-1.5"
        />
        Buy me a coffee</a
      >
    </div>
  </div>
</main>
