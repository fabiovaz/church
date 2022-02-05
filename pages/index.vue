<template>
  <main>
    <div class="cover">
      <img class="background" src="~/assets/img/cover.jpg" />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col col-md-10">
            <div class="caption text-center">
              <h6 class="text-uppercase">Bem-vindo ao Templo do Rio de Janeiro</h6>
              <h1>Você é nosso convidado especial para uma visita prévia.</h1>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col col-md-10">
            <div class="callout">
              <div class="row">
                <div class="col text-center">
                  <h2>Os Templos</h2>
                </div>
              </div>
              <p>Os templos não são lugares comuns de adoração aos domingos para os membros de A Igreja de Jesus Cristo dos Santos dos Últimos Dias. Eles são bem diferentes de milhares de capelas ou edifícios comuns no mundo inteiro usados para as reuniões de domingo.</p>
              <p>Qualquer pessoa, seja qual for sua religião, pode entrar numa capela da Igreja de Jesus Cristo e frequentar suas reuniões. No entanto, devido à natureza sagrada dos templos como “casas do Senhor”, apenas membros fiéis da Igreja têm permissão para entrar nos templos. O membro deve estar cumprindo os princípios básicos de fé e declarar o fato a seus líderes locais uma vez a cada dois anos para poder entrar no templo.</p>
              <p>Os templos dos santos dos últimos dias são considerados casas de Deus, um lugar de santidade e paz, separado das preocupações do mundo. Os templos fornecem um local onde os membros da Igreja fazem promessas solenes e assumem compromissos com Deus. Eles também são o local onde os mais sublimes sacramentos de fé ocorrem — o casamento de casais e o “selamento” de famílias para toda eternidade.</p>
              <p>Os templos são o único local onde são realizadas cerimônias como o batismo e o casamento eterno em favor de pessoas falecidas — uma prática que os santos dos últimos dias acreditam que foi seguida na época do Novo Testamento, mas que mais tarde foi perdida.</p>
              <p>Os templos fazem com que os santos dos últimos dias se voltem para Jesus Cristo e tenham uma perspectiva de sua vida futura com Ele, com o Pai Celestial e com os membros de sua família sob a condição de fidelidade aos ensinamentos de Cristo.</p>
              <p>Há 167 templos no mundo, seja em funcionamento, em construção ou cujos projetos já foram anunciados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="construcao">
      <CoolLightBox
        :items="gallery.items"
        :index="gallery.index"
        @close="gallery.index = null">
      </CoolLightBox>

      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Galeria de Fotos</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="grid">
              <div
                v-for="(image, imageIndex) in gallery.items"
                :key="imageIndex"
                class="grid__item"
                @click="gallery.index = imageIndex"
              >
                <img :src="image" class="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lideranca">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Boas Vindas Élder Ulisses Soares</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-7">
                <p>Élder Ulisses Soares, membro do Quórum dos Doze Apóstolos, estará no Templo do Rio, acompanhando de sua esposa, para dar boas vindas e recepcionar todos os convidados.</p>
                <p>O élder Ulisses Soares foi apoiado como membro do Quórum dos Doze Apóstolos de A Igreja de Jesus Cristo dos Santos dos Últimos Dias no dia 31 de março de 2018. O Quórum dos Doze Apóstolos é o segundo maior corpo presidente na administração da Igreja. Seus membros servem sob a orientação da Primeira Presidência, uma unidade administrativa formada por três homens — o presidente e dois conselheiros.</p>
                <p>Além de sua responsabilidade principal de serem testemunhas especiais de Cristo em todo mundo, os apóstolos têm grandes responsabilidades administrativas como supervisionar o progresso e desenvolvimento ordenado da Igreja no mundo.</p>
              </div>
              <div class="col-md-5">
                <img src="~/assets/img/ulisses.jpg">
              </div>
            </div>
            <div class="row mt-5">
              <div class="col">
                <div class="ratio ratio-21x9">
                  <iframe src="https://www.youtube.com/embed/Z0gpwau8F3w?rel=0" title="YouTube video" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="localizacao">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Localização</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-9">
            <div class="ratio ratio-16x9">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.624248451831!2d-43.40154844868762!3d-23.000840884890298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb82ff03a8d9%3A0x7444b2c941960bd3!2sAv.%20das%20Am%C3%A9ricas%2C%209005%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-081!5e0!3m2!1spt-BR!2sbr!4v1644079937541!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="faq">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Perguntas Frequentes</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
          </div>
        </div>
      </div>
    </div>

    <div class="agenda">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Agendar Visita</h2>
          </div>
        </div>
        <div v-if="currentStep === 1" class="step1">
          <div class="row">
            <div class="col-md-6">
              <p>O Templo do Rio de Janeiro, de A Igreja do Jesus Cristo dos Santos dos Últimos Dias está aberto para receber a todos. Para tornar sua visita completa, selecione a data e horário de sua preferência. Caso queira levar mais alguém, você terá essa opção.</p>
              <p>Caso não seja possível comparecer nas datas indicadas –  e tenha o desejo de visitar ao Templo entre o período de 26 de março e 30 de abril, entre em contato pelo email – <a href="mailto:garciantj@churchofjesuschrist.org">garciantj@churchofjesuschrist.org</a></p>
            </div>
            <div class="col-md-6">
              <CardSchedule :date="'2022-03-22'" :spots="722" @click.native="currentStep = 2" />
              <CardSchedule :date="'2022-03-23'" :spots="1400" @click.native="currentStep = 2" />
              <CardSchedule :date="'2022-03-24'" :spots="213" @click.native="currentStep = 2" />
              <CardSchedule :date="'2022-03-25'" :spots="982" @click.native="currentStep = 2" />
            </div>
          </div>
        </div>
        <div v-if="currentStep === 2" class="step2">
          <div class="row justify-content-around">
            <div class="col-md-3">
              <CardSchedule :date="'2022-03-23 09:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 09:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 09:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 09:45'" :spots="60" />
              <CardSchedule :date="'2022-03-23 10:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 10:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 10:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 10:45'" :spots="60" />
              <CardSchedule :date="'2022-03-23 11:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 11:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 11:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 11:45'" :spots="60" />
              <CardSchedule :date="'2022-03-23 12:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 12:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 12:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 12:45'" :spots="60" />
            </div>
            <div class="col-md-3">
              <CardSchedule :date="'2022-03-23 13:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 13:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 13:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 13:45'" :spots="60" />
              <CardSchedule :date="'2022-03-23 14:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 14:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 14:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 14:45'" :spots="60" />
              <CardSchedule :date="'2022-03-23 15:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 15:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 15:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 15:45'" :spots="60" />
              <CardSchedule :date="'2022-03-23 16:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 16:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 16:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 16:45'" :spots="60" />
            </div>
            <div class="col-md-3">
              <CardSchedule :date="'2022-03-23 17:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 17:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 17:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 17:45'" :spots="60" />
              <CardSchedule :date="'2022-03-23 18:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 18:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 18:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 18:45'" :spots="60" />
              <CardSchedule :date="'2022-03-23 19:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 19:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 19:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 19:45'" :spots="60" />
              <CardSchedule :date="'2022-03-23 20:00'" :spots="60" />
              <CardSchedule :date="'2022-03-23 20:15'" :spots="60" />
              <CardSchedule :date="'2022-03-23 20:30'" :spots="60" />
              <CardSchedule :date="'2022-03-23 20:45'" :spots="60" />
              <CardSchedule :date="'2022-03-23 21:00'" :spots="60" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  name: 'IndexPage',
  components: {
    CoolLightBox,
  },
  data () {
    return {
      currentStep: 1,
      gallery: {
        items: [
          '/img/001db7326e638032470a02813c9e47191ef74b0e.jpg',
          '/img/4f20f1e63339d99efaa9f67bae5c268b80eebbb4.jpg',
          '/img/5aa85fb6f20a17f629302687710142328a707d4d.jpg',
          '/img/7acbc19afbd43541f7e347e63788819b92ee1cf2.jpg',
          '/img/7fbadb86ee6d57f290034b02013dd8ba66f1de93.jpg',
          '/img/8cc25a05e594004ab3c968f712c8f6d378cf133d.jpg',
          '/img/10da19dcf8657dfc79937c55e14eda75e89f1cbd.jpg',
          '/img/35f0141e865cdcc4267d1de78bef3693f305953e.jpg',
          '/img/44a124e6fe618047c177f883622a35d3a95dec86A.jpg',
          '/img/60fc821ebc28e202c992a141d007187272c1f143.jpg',
          '/img/86e695418ffc5d733768fab1fa91d373a4f955e6.jpg',
          '/img/90eb02c602f2560a825b2c6cf27953741b67b14c.jpg',
          '/img/094cee15829bcf97dcb7b96ab1549d9974819419.jpg',
          '/img/96a730d5234af311f1484511b97b7b4049dda1cd.jpg',
          '/img/130d4ae592e1e19dfb0514a5b77807a52d00f2f1.jpg',
          '/img/954a3b8cab5c88260e94d6ffb504f2c58338a029.jpg',
          '/img/743652dbbf1ab19966da7eb3c7570d08cfc3ab8b.jpg',
          '/img/9818718242f5681b4543560b553e0498684b53e2.jpg',
          '/img/a300795d321358659972549afbbf80c7956a9120.jpg',
          '/img/ab0d337b12b4c0482de3e63e821583a2baa8870f.jpg',
          '/img/ba79609cb94525e0d9a98d68016efba13c89dac8.jpg',
          '/img/c9df17c8040f21776c108365ff9f61098302aa63.jpg'
        ],
        index: null
      },
      flickityOptions: {
        pageDots: false,
        contain: true,
        lazyLoad: 3,
        cellSelector: '.carousel-card'
      }
    }
  },
  methods: {
    imgsLoaded () {
      const flickityInstance = this.$refs.flickity
      flickityInstance.reloadCells()
    }
  }
}
</script>

<style lang="scss">
main {
  h2 {
    font-family: 'Playfair Display', serif;
    padding-bottom: 40px;
  }
  h4 {
    font-family: 'Playfair Display', serif;
    padding-bottom: 20px;
  }

  .cover {
    padding: 50px 0;
    .background {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    .caption {
      margin-top: 30vh;
      color: #FFF;
      h1 {
        font-size: 4rem;
        font-family: 'Playfair Display', serif;
      }
    }
    .callout {
      margin-top: 100px;
      padding: 60px 100px;
      background: #FFF;
      box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
    }
  }

  .construcao {
    padding: 50px 0;
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(290px,1fr));
      grid-auto-rows: auto;
      grid-gap: 30px;
      &__item {

      }
    }
  }

  .lideranca {
    padding: 50px 0;
    .carousel-card {
      margin: 60px 20px;
      padding: 50px;
      width: 100%;
      max-width: 730px;
      background: #FFF;
      box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
    }
  }

  .faq {
    padding: 50px 0;
  }

  .localizacao {
    padding: 50px 0;
  }

  .agenda {
    padding: 50px 0;
  }

}
</style>
