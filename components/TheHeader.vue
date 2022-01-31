<template>
  <header>
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
                  Brasil - Fatos e Estatísticas
                </a>
              </li>
              <li>
                <a href="#">
                  O Templo do Rio
                </a>
              </li>
              <li>
                <a href="#">
                  Liderança e Organização
                </a>
              </li>
              <li>
                <a href="#">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" class="button text-center">
                  AGENDAR<br />VISITA
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    nav {
      ul {
        display: flex;
        padding: 0;
        list-style: none;
        align-items: center;
        justify-content: space-between;
        li {
          a {
            display: block;
            color: #FFF;
            text-decoration: none;
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
  }
</style>