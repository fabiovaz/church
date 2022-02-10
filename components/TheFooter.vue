<template>
  <footer>
    <div class="header">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="row align-items-center">
              <div class="col-5 col-md-6 text-end pe-md-5">
                <img src="/img/logo.png">
              </div>
              <div class="col-7 col-md-6 text-left ps-md-5">
                <h2>Links</h2>
                <ul>
                  <li>
                    <a href="#">
                      Vinde a Cristo
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Saiba mais sobre os Templos
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Nossas Crenças
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Converse com os Missionários
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Site da Igreja em Português
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sala de Imprensa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h6 class="text-uppercase small">Copyright 2022 - A Igreja de Jesus Cristo dos Santos dos Últimos Dias</h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: #FFF;
  background: #003058;
  h2 {
    font-family: 'Playfair Display', serif;
  }
  h6 {
    padding: 10px 0;
    margin: 0;
  }
  .header {
    padding: 50px 0;
    background: #003c6e;
    ul {
      margin: 0;
      padding: 15px 0;
      font-size: 14px;
      list-style: none;
      li {
        padding: 8px 0;
        a {
          text-decoration: none;
          color: #FFF;
          &:hover {
            color: #86a5bf;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
