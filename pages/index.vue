<template>
  <main>
    <div id="templos" class="cover">
      <img class="background" src="~/assets/img/cover.jpg" />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col col-md-10">
            <div class="caption text-center">
              <h6 class="text-uppercase">Bem-vindo ao Templo do Rio de Janeiro</h6>
              <h1>Você é nosso convidado para uma visita especial</h1>
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

    <div id="galeria" class="construcao">
      <CoolLightBox
        :items="gallery.items"
        :index="gallery.index"
        :effect="'fade'"
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
                <img :src="image.replace(/.jpg/g, '_thumb.jpg')" class="w-100" />
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
            <div class="row justify-content-center">
              <div class="col-8 col-lg-5 mb-4 order-lg-2">
                <img src="~/assets/img/ulisses.jpg" class="w-100">
              </div>
              <div class="col-lg-7">
                <p>Élder Ulisses Soares, membro do Quórum dos Doze Apóstolos, estará no Templo do Rio, acompanhando de sua esposa, para dar boas vindas e recepcionar todos os convidados.</p>
                <p>O élder Ulisses Soares foi apoiado como membro do Quórum dos Doze Apóstolos de A Igreja de Jesus Cristo dos Santos dos Últimos Dias no dia 31 de março de 2018. O Quórum dos Doze Apóstolos é o segundo maior corpo presidente na administração da Igreja. Seus membros servem sob a orientação da Primeira Presidência, uma unidade administrativa formada por três homens — o presidente e dois conselheiros.</p>
                <p>Além de sua responsabilidade principal de serem testemunhas especiais de Cristo em todo mundo, os apóstolos têm grandes responsabilidades administrativas como supervisionar o progresso e desenvolvimento ordenado da Igreja no mundo.</p>
              </div>
            </div>
            <div class="row mt-5 order-lg-1">
              <div class="col">
                <div class="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/c5JW7QwnjoY?rel=0" title="YouTube video" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="agendar" ref="agenda" class="agenda">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Agendar Visita</h2>
          </div>
        </div>

        <div v-if="currentStep === 1" class="step1">
          <div class="row justify-content-center">
            <div class="col col-md-6">
              <div class="row">
                <div class="col-md-7">
                  <p>O Templo do Rio de Janeiro, de A Igreja do Jesus Cristo dos Santos dos Últimos Dias está aberto para receber a todos. Para tornar sua visita completa, selecione a data e horário de sua preferência. Caso queira levar mais alguém, você terá essa opção.</p>
                  <p>Caso não seja possível comparecer nas datas indicadas –  e tenha o desejo de visitar ao Templo entre o período de 26 de março e 30 de abril, entre em contato pelo email – <a href="mailto:garciantj@churchofjesuschrist.org">garciantj@churchofjesuschrist.org</a></p>
                </div>
                <div class="col-md-5">
                  <CardSchedule
                    v-for="(schedule, index) in schedules" :key="index"
                    :date="schedule.attributes.horario.substring(0, 10)"
                    :spots="schedule.attributes.contador + schedule.attributes.agrupador"
                    @click.native="fetchSchedule(2, { horario: schedule.attributes.horario.substring(0, 10) })"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="currentStep === 2" class="step2">
          <div class="row justify-content-around">
            <div class="col-md-3">
              <CardSchedule
                v-for="(schedule, index) in filteredItems(1, 3, schedules)" :key="index"
                :date="schedule.attributes.horario"
                :total-spots="scheduleLimit.spots"
                :spots="schedule.attributes.contador"
                @click.native="fetchSchedule(3, { horario: schedule.id, vagas: schedule.attributes.contador })"
              />
            </div>
            <div class="col-md-3">
              <CardSchedule
                v-for="(schedule, index) in filteredItems(2, 3, schedules)" :key="index"
                :date="schedule.attributes.horario"
                :total-spots="scheduleLimit.spots"
                :spots="schedule.attributes.contador"
                @click.native="fetchSchedule(3, { horario: schedule.id, vagas: schedule.attributes.contador })"
              />
            </div>
            <div class="col-md-3">
              <CardSchedule
                v-for="(schedule, index) in filteredItems(3, 3, schedules)" :key="index"
                :date="schedule.attributes.horario"
                :total-spots="scheduleLimit.spots"
                :spots="schedule.attributes.contador"
                @click.native="fetchSchedule(3, { horario: schedule.id, vagas: schedule.attributes.contador })"
              />
            </div>
          </div>
        </div>
        <div v-if="currentStep === 3" class="step3">
          <div class="row justify-content-center">
            <div v-if="!submitSchedule.success" class="col-md-4">
              <p>Por favor preencha os dados para completar a requisição.</p>
              <form @submit.prevent="addSchedule">
                <input v-model="visitor.agenda" type="hidden" class="form-control">
                <input v-model="visitor.grupo" type="hidden" class="form-control">
                <div class="mb-3">
                  <label for="inputName" class="form-label">Seu nome</label>
                  <input id="inputName" v-model="visitor.nome" type="text" class="form-control" required>
                </div>
                <div class="mb-3">
                  <label for="inputEmail" class="form-label">Seu e-mail</label>
                  <input id="inputEmail" v-model="visitor.email" type="email" class="form-control" required>
                </div>
                <div class="mb-3">
                  <label for="inputTelephone" class="form-label">Seu telefone</label>
                  <input id="inputTelephone" v-model="visitor.telefone" v-mask="['(##) ####-####', '(##) #####-####']" type="text" class="form-control" required>
                </div>
                <div class="mb-5">
                  <label for="inputCompany" class="form-label">Empresa/Instituição</label>
                  <input id="inputCompany" v-model="visitor.empresa" type="text" class="form-control" required>
                </div>

                <div class="guests">
                  <div v-for="(guest, index) in guests" :key="index">
                    <div class="mb-3">
                      <label class="form-label">Nome do convidado</label>
                      <div class="position-relative">
                        <input v-model="guest.nome"  type="text" class="form-control" required>
                        <button type="button" class="btn remove" @click="removeGuest(index)">
                          &times;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <button type="button" class="btn add" :class="{ disabled: scheduleLimit.guests < 2 }" @click="addGuest">
                    <span v-if="scheduleLimit.guests >= 2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99984 8.00008H2.6665M7.99984 13.3334V8.00008V13.3334ZM7.99984 8.00008V2.66675V8.00008ZM7.99984 8.00008H13.3332H7.99984Z" stroke="#003058" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                      Adicionar convidado
                    </span>
                    <span v-if="scheduleLimit.guests < 2">
                      Vagas esgotadas
                    </span>
                  </button>
                  <button type="submit" class="btn submit">Agendar</button>
                </div>
                <div v-show="submitSchedule.error" class="error mt-3 color-red">
                  <span>Algo estranho aconteceu:</span>
                  <span>{{ submitSchedule.error }}</span>
                </div>
              </form>
            </div>
            <div v-if="submitSchedule.success" class="col-md-6 py-5 text-center" style="background: #f8fcff">
              <h3 class="fw-bold mb-4">Agendamento foi concluído com sucesso!</h3>
              <p>Sua visita ao Templo do Rio foi agendada com sucesso.</p>
              <p>Você irá receber um E-mail com a confirmação da sua reserva.</p>
              <p>Em caso de dúvidas ou alterações, entrar em contato com: (11) 97651-9201</p>
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
            <div class="ratio ratio-21x9">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.624248451831!2d-43.40154844868762!3d-23.000840884890298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb82ff03a8d9%3A0x7444b2c941960bd3!2sAv.%20das%20Am%C3%A9ricas%2C%209005%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-081!5e0!3m2!1spt-BR!2sbr!4v1644079937541!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="faq" class="faq">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Perguntas Frequentes</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <accordion>
              <accordion-item>
                <template #accordion-trigger>
                  <h5>Não sou membro da Igreja. Ainda posso vir?</h5>
                </template>
                <template #accordion-content>
                  <p>Em absoluto! Todos são bem-vindos para frequentar nossos eventos e serviços de adoração. Pedimos que todos os presentes usem linguagem apropriada e tratem a todos com respeito. Somos Cristãos que fazemos nosso melhor para seguir os mandamentos e ensinamentos de Cristo. Qualquer que seja sua crença ou orientação religiosa, ou mesmo se não tiver uma crença religiosa, você está convidado a unir-se a nós!</p>
                </template>
              </accordion-item>

              <accordion-item>
                <template #accordion-trigger>
                  <h5>Quantas crianças posso trazer?</h5>
                </template>
                <template #accordion-content>
                  <p>Traga todos seus filhos. Todos são bem-vindos.</p>
                </template>
              </accordion-item>

              <accordion-item>
                <template #accordion-trigger>
                  <h5>E se eu tiver mais de 10 pessoas no meu grupo? </h5>
                </template>
                <template #accordion-content>
                  <p>Faça a confirmação da visita, dia e horário.</p>
                </template>
              </accordion-item>

              <accordion-item>
                <template #accordion-trigger>
                  <h5>Posso voltar e reservar outros dias? </h5>
                </template>
                <template #accordion-content>
                  <p>Sim, se desejar voltar a visitar o Templo e trazer amigos e familiares, agende outro dia, será um prazer recebê-los novamente.  </p>
                </template>
              </accordion-item>

              <accordion-item>
                <template #accordion-trigger>
                  <h5>Como cancelo minha visita?</h5>
                </template>
                <template #accordion-content>
                  <p>Entre em contato pelo telefone (11) 97651-9201 (WhatsApp)</p>
                </template>
              </accordion-item>

              <accordion-item>
                <template #accordion-trigger>
                  <h5>Posso usar um carrinho de bebê no tour?</h5>
                </template>
                <template #accordion-content>
                  <p>Há escadas e múltiplas mudanças de elevação envolvendo dois ou mais degraus no transcorrer do tour. Crianças de colo precisarão ser carregadas.</p>
                </template>
              </accordion-item>

              <accordion-item>
                <template #accordion-trigger>
                  <h5>Poderei usar uma cadeira de rodas elétrica? </h5>
                </template>
                <template #accordion-content>
                  <p>Há áreas do tour que não são acessíveis a cadeiras de rodas elétricas. No entanto, haverá cadeiras de rodas não elétricas e ajudantes para dar assistência aos visitantes durante todo o tour do Templo.</p>
                </template>
              </accordion-item>

              <accordion-item>
                <template #accordion-trigger>
                  <h5>Não recebi meu e-mail de confirmação com meus ingressos. Que devo fazer?</h5>
                </template>
                <template #accordion-content>
                  <p>Há duas razões pelas quais você não tenha recebido seu e-mail de confirmação:</p>
                  <p>1.) O e-mail foi para sua caixa de SPAM. Por favor verifique esses arquivos de e-mail e procure por um e-mail de “Confirmação de Agendamento”.</p>
                  <p>2.) Foi colocado endereço de e-mail errado no pedido. Por favor mande por e-mail o primeiro nome e sobrenome que você usou para reservar os ingressos e o endereço de e-mail correto para <a href="mailto:templodoriodejaneiro@gmail.com">templodoriodejaneiro@gmail.com</a> - tentaremos achar seu pedido e reenviar os ingressos. </p>
                </template>
              </accordion-item>

              <accordion-item>
                <template #accordion-trigger>
                  <h5>Haverá estacionamento no local?</h5>
                </template>
                <template #accordion-content>
                  <p>Sim, há estacionamento no local e pessoas capacitadas irão orientá-los na chegada.</p>
                </template>
              </accordion-item>
            </accordion>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import { mask } from 'vue-the-mask'


export default {
  name: 'IndexPage',
  directives: {
    mask
  },
  components: {
    CoolLightBox
  },
  data () {
    return {
      currentStep: 1,
      schedules: [],
      scheduleLimit: {
        spots: 60,
        guests: null
      },
      visitor: {
        agenda: null,
        nome: null,
        email: null,
        telefone: null,
        empresa: null,
        grupo: Date.now()
      },
      guests: [],
      submitSchedule: {
        loading: false,
        error: null,
        success: null
      },
      gallery: {
        items: [ '/img/001db7326e638032470a02813c9e47191ef74b0e.jpg', '/img/4f20f1e63339d99efaa9f67bae5c268b80eebbb4.jpg', '/img/5aa85fb6f20a17f629302687710142328a707d4d.jpg', '/img/7acbc19afbd43541f7e347e63788819b92ee1cf2.jpg', '/img/7fbadb86ee6d57f290034b02013dd8ba66f1de93.jpg', '/img/8cc25a05e594004ab3c968f712c8f6d378cf133d.jpg', '/img/10da19dcf8657dfc79937c55e14eda75e89f1cbd.jpg', '/img/35f0141e865cdcc4267d1de78bef3693f305953e.jpg', '/img/44a124e6fe618047c177f883622a35d3a95dec86A.jpg', '/img/60fc821ebc28e202c992a141d007187272c1f143.jpg', '/img/86e695418ffc5d733768fab1fa91d373a4f955e6.jpg', '/img/90eb02c602f2560a825b2c6cf27953741b67b14c.jpg', '/img/094cee15829bcf97dcb7b96ab1549d9974819419.jpg', '/img/96a730d5234af311f1484511b97b7b4049dda1cd.jpg', '/img/130d4ae592e1e19dfb0514a5b77807a52d00f2f1.jpg', '/img/954a3b8cab5c88260e94d6ffb504f2c58338a029.jpg', '/img/743652dbbf1ab19966da7eb3c7570d08cfc3ab8b.jpg', '/img/9818718242f5681b4543560b553e0498684b53e2.jpg', '/img/a300795d321358659972549afbbf80c7956a9120.jpg', '/img/ab0d337b12b4c0482de3e63e821583a2baa8870f.jpg', '/img/ba79609cb94525e0d9a98d68016efba13c89dac8.jpg', '/img/c9df17c8040f21776c108365ff9f61098302aa63.jpg' ],
        index: null
      }
    }
  },
  created () {
    this.fetchSchedule(1, null)
  },
  methods: {
    goto (refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop - 120

      window.scrollTo(0, top)
    },
    addGuest () {
      this.guests.push({
        agenda: this.visitor.agenda,
        grupo: this.visitor.grupo,
        nome: '',
        visitante: true
      })
      this.scheduleLimit.guests--
    },
    removeGuest (index) {
      this.guests.splice(index, 1)
      this.scheduleLimit.guests++
    },
    async fetchSchedule (step, params) {
      switch (step) {
        case 1:
          this.currentStep = 1
          break
        case 2:
          this.currentStep = 2
          break
        case 3:
          this.currentStep = 3
          break
        case 'next':
          this.currentStep++
          break
        case 'prev':
          this.currentStep--
          break
        default:
      }

      if (this.currentStep === 1) {
        const { data: schedulesGrouped } = await this.$axios.$get(`/agendas/agrupado`)
        this.schedules = schedulesGrouped
      }

      if (this.currentStep === 2) {
        const qs = require('qs')
        const query = qs.stringify({
          sort: ['horario:asc'],
          filters: {
            horario: {
              $containsi: params.horario,
            },
          },
          pagination: {
            page: 1,
            pageSize: 60,
          },
        }, {
          encodeValuesOnly: true,
        })
        const { data: schedules } = await this.$axios.$get(`/agendas?${query}`)
        this.schedules = schedules
      }
      if (this.currentStep === 3) {
        this.scheduleLimit.guests = (this.scheduleLimit.spots - params.vagas)
        this.visitor.agenda = params.horario
        this.goto('agenda')
      }
    },
    async addSchedule () {
      this.submitSchedule.loading = true

      const payload = {
        data: [ { ...this.visitor }, ...this.guests ]
      }

      await this.$axios.$post('/agendamentos/create-many', payload)
        .then((response) => {
          // Success
          this.submitSchedule.loading = false
          this.submitSchedule.success = true
        })
        .catch((error) => {
          // Error
          if (error.response) {
            this.submitSchedule.error = error.response.data.error.message
          }
        })
    },
    filteredItems(column, columns, element) {
      const total = element.length
      const gap = Math.ceil(total / columns)
      let top = (gap * column)
      const bottom = ((top - gap))
      top--
      // return element.filter(item => element.indexOf(item) % columns === column - 1 )
      // return element.filter(function(el) {
      //   console.log('top:', top, 'bottom:', bottom, 'index:', element.indexOf(el))
      //   return true
      //   // return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
      // })
      return element.filter(item => element.indexOf(item) >= bottom && element.indexOf(item) <= top)
    }
  }
}
</script>

<style lang="scss">
main {
  h2 {
    font-family: 'Playfair Display', serif;
    padding-bottom: 40px;
    @media (max-width: 991.98px) {
      padding-bottom: 20px;
    }
  }
  h4 {
    font-family: 'Playfair Display', serif;
    padding-bottom: 20px;
  }

  .cover {
    padding: 50px 0 0;
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
        @media (max-width: 991.98px) {
          font-size: 2rem;
        }
      }
    }
    .callout {
      margin-top: 100px;
      padding: 60px 100px;
      background: #FFF;
      box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
      @media (max-width: 991.98px) {
        padding: 30px;
      }
    }
  }

  .construcao {
    padding: 100px 0 0;
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(290px,1fr));
      grid-auto-rows: auto;
      grid-gap: 30px;
    }
  }

  .lideranca {
    padding: 100px 0 0;
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
    padding: 100px 0;
  }

  .localizacao {
    padding: 100px 0 0;
  }

  .agenda {
    padding: 100px 0 0;
    form {
      .guests {
        .form-control {
          padding-right: 35px;
        }
      }
      button {
        &.add {
          padding: 0;
        }
        &.remove {
          position: absolute;
          top: 0;
          right: 0;
        }
        &.submit {
          padding: 15px 20px;
          text-transform: uppercase;
          font-size: 14px;
          color: #FFF;
          background: #003058;
        }
      }
      .error {
        font-size: 14px;
        color: red;
      }
    }
  }

}
</style>
