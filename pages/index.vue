<template>
  <main>
    <div class="landing">
      <div class="container-full">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="cover">
              <img src="~assets/img/cover.jpg" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="content d-flex flex-column justify-content-around h-100 py-3">
              <h3 class="my-3">TEMPLO DO RIO DE JANEIRO</h3>
              <div class="callout mx-auto">
                <h2>SAVE THE DATE</h2>
                <h5>22 a 25 de MARÇO de 2022</h5>
              </div>
              <div class="row gx-0 justify-content-center my-3">
                <div class="col-6">
                  <p>Em breve, você poderá agendar a sua visita neste site.</p>
                </div>
              </div>
              <div class="footer my-3">
                <h6>Presidência da Área Brasil</h6>
                <h6 class="small">A Igreja de Jesus Cristo dos Santos dos Últimos Dias</h6>
              </div>
            </div>
          </div>
        </div>
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
    font-family: 'Playfair Display', sans-serif;
    background-image: linear-gradient(90deg, #F7F8F2 75%, #69594C 25%);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
  main {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(90deg, #F7F8F2 75%, #69594C 25%);
  }
  .landing {
    box-shadow: 0px 10px 50px 5px rgba(0, 0, 0, .05);
    background: #FFF;
    .cover {
      background: red;
      img {
        width: 100%;
        height: 100%;
        min-width: 100%;
        min-height: 100%;
      }
    }
    .content {
      text-align: center;
      h3 {
        color: #A99378;
      }
      .callout {
        width: fit-content;
        padding: 25px 40px;
        background: rgba(238, 235, 226, .5);
        h2 {
          color: #695346;
        }
        h5 {
          color: #A99378;
        }
      }
      p {
        font-family: 'Lato';
        font-size: 18px;
        color: #A99378;
      }
      h6 {
        font-weight: 400;
        color: #69594C;
      }
    }
  }
</style>