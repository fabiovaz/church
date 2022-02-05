<template>
  <header :class="{ scrolled: scrolled }">
    <div class="container">
      <div class="row">
        <div class="col">
          <nav>
            <ul>
              <li>
                <a href="#" class="logo">
                  <img src="~/assets/img/logo.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  Início
                </a>
              </li>
              <li>
                <a href="#">
                  Os Templos
                </a>
              </li>
              <li>
                <a href="#">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" class="button text-center">
                  AGENDAR VISITA
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      scrolled: false
    }
  },
  mounted () {
    window.document.onscroll = () => {
      if (window.scrollY > 0) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    }
  }
}
</script>

<style lang="scss">
  header {
    z-index: 50;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: all .1s;
    nav {
      ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        align-items: center;
        justify-content: space-between;
        li {
          a {
            display: block;
            color: #FFF;
            text-decoration: none;
            img {
              width: 190px;
              transition: all .3s;
            }
          }
        }
      }
      .logo {
        padding: 20px 15px;
        background: #FFF;
      }
      .button {
        padding: 15px 20px;
        background: #003058;
      }
    }
    &.scrolled {
      background: #FFF;
      box-shadow: 0px 4px 40px rgb(0 0 0 / 5%);
      nav {
        ul {
          li {
            a {
              color: #000;
              img {
                width: 120px;
              }
              &.button {
                color: #FFF;
              }
            }
          }
        }
      }
    }
  }
</style>
