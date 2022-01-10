<template>
  <main>
    <div class="landing">
      <div class="image">
        <img src="~assets/img/savethedate.jpg" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss">
  body {
    font-family: 'Roboto', sans-serif;
  }
  .landing {
      width: 100vw;
      height: 100vh;
      background: #f7f8f2;
    .image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        max-width: 90vw;
        max-height: 90vh;
      }
    }
  }
</style>