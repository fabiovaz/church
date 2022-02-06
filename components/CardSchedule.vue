<template>
  <div
    class="card-schedule"
    :class="{ disabled: totalSpots === spots }"
  >
    <div class="date">
      <div class="date__weekday">
        {{ $dayjs(date).format('ddd') }}
      </div>
      <div class="date__calendar">
        <div class="date__day">
          {{ $dayjs(date).format('DD') }}
        </div>
        <div class="date__month">
          {{ $dayjs(date).format('MMM') }}
        </div>
      </div>
    </div>
    <div class="body">
      <div v-if="$dayjs(date).format('HH') != '00'" class="body__title">
        {{ $dayjs(date).format('HH:mm') }}
      </div>
      <div class="body__description">
        <span v-if="totalSpots === spots">
          Não há vagas disponiveis
        </span>
        <span v-if="totalSpots > spots">
          <strong>{{ totalSpots - spots }}</strong> vagas disponiveis
        </span>
      </div>
    </div>
    <div class="action">
      <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2.25003V3.75003C0 3.82295 0.0234375 3.88285 0.0703125 3.92972C0.117188 3.9766 0.177083 4.00004 0.25 4.00004H10V5.75004C10 5.85942 10.0495 5.93494 10.1484 5.9766C10.2474 6.01827 10.3385 6.00525 10.4219 5.93754L13.4219 3.20316C13.474 3.15107 13.5 3.09118 13.5 3.02347C13.5 2.95055 13.474 2.88805 13.4219 2.83597L10.4219 0.0703349C10.3385 -0.00258198 10.2474 -0.018207 10.1484 0.0234598C10.0495 0.0703349 10 0.145856 10 0.250023V2.00003H0.25C0.177083 2.00003 0.117188 2.02347 0.0703125 2.07034C0.0234375 2.11722 0 2.17711 0 2.25003Z" fill="#444444"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSchedule',
  props: {
    date: {
      type: String,
      default: null
    },
    totalSpots: {
      type: Number,
      default: null
    },
    spots: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss">
  .card-schedule {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 10px;
    border-top: 1px solid #E7E7E7;
    .date {
      &__weekday {
        font-size: 14px;
        line-height: 1;
        text-transform: uppercase;
      }
      &__calendar {
        margin-top: 12px;
        display: flex;
        align-items: baseline;
      }
      &__day {
        font-size: 32px;
        line-height: 1;
        font-weight: 800;
        text-transform: uppercase;
      }
      &__month {
        margin-left: 8px;
        font-size: 14px;
        line-height: 1;
      }
    }
    .body {
      &__title {
        font-size: 28px;
        font-weight: 800;
      }
      &__description {
        font-size: 14px;
      }
    }
    &:hover {
      background: #F9F9F9;
    }
    &.disabled {
      pointer-events: none;
      opacity: .3;
    }
  }
</style>
