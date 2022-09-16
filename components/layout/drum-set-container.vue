<template>
  <div id="drum-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
#drum-container {
  display: grid;
  grid-template-areas: 
    "crash1 splash ride crash2"
    "tom1 tom1 tom2 floortom"
    "hihat snare snare bass";
}

#drum-part-snare{
  grid-area: snare;
}

#drum-part-bass{
  grid-area: bass;
}

#drum-part-tom_1{
  grid-area: tom1;
}

#drum-part-tom_2{
  grid-area: tom2;
}

#drum-part-floor_tom{
  grid-area: floortom;
}

#drum-part-ride{
  grid-area: ride;
}

#drum-part-hihat{
  grid-area: hihat;
}

#drum-part-crash_1{
  grid-area: crash1;
}

#drum-part-crash_2{
  grid-area: crash2;
}

#drum-part-splash{
  grid-area: splash;
}
</style>