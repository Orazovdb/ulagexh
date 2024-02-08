<template>
  <div class="flex flex-xy-center">
    <ul :class="paginationClasses.ul">
      <li
        v-if="paginationLabels.prev"
        :class="`${paginationClasses.li} ${
          hasFirst ? paginationClasses.liDisable : ''
        }`"
      >
        <button
          @click="prev"
          :disabled="hasFirst"
          :class="`${paginationClasses.button} ${
            hasFirst ? paginationClasses.buttonDisable : ''
          }`"
        >
          <base-icon icon="arrowPaginationLeft" />
        </button>
      </li>

      <li
        v-for="page in items"
        :key="page.label"
        :class="`${paginationClasses.li} ${
          page.active ? paginationClasses.liActive : ''
        } ${page.disable ? paginationClasses.liDisable : ''}`"
      >
        <span
          v-if="page.disable"
          :class="`${paginationClasses.number} ${paginationClasses.numberDisable}`"
        >
          ...
        </span>
        <button
          v-else
          @click="goto(page.label)"
          :class="`${paginationClasses.number} ${
            page.active ? paginationClasses.numberActive : ''
          }`"
        >
          {{ page.label }}
        </button>
      </li>

      <li
        v-if="paginationLabels.next"
        :class="`${paginationClasses.li} ${
          hasLast ? paginationClasses.liDisable : ''
        }`"
      >
        <button
          @click="next"
          :disabled="hasLast"
          :class="[
            `${paginationClasses.button} ${
              hasLast ? paginationClasses.buttonDisable : ''
            }`,
          ]"
        >
          <base-icon icon="arrowPaginationRight" class="salam" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
const defaultClasses = {
  ul: 'pagination',
  li: 'pagination__item',
  liActive: 'pagination__item--active',
  liDisable: 'pagination__item--disable',
  button: 'pagination__link',
  number: 'pagination__number',
  numberActive: 'pagination__number--active',
  numberDisable: 'pagination__number--disable',
  buttonActive: 'pagination__link--active',
  buttonDisable: 'pagination__link--disable',
}
const defaultLabels = {
  first: '&laquo;',
  prev: '&lsaquo;',
  next: '&rsaquo;',
  last: '&raquo;',
}

export default {
  props: {
    value: {
      // current page
      type: Number,
      required: true,
    },
    pageCount: {
      // page numbers
      type: Number,
      required: true,
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    labels: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      paginationClasses: {
        ...defaultClasses,
        ...this.classes,
      },
      paginationLabels: {
        ...defaultLabels,
        ...this.labels,
      },
    }
  },
  mounted() {
    if (this.value > this.pageCount) {
      this.$emit('input', this.pageCount)
    }
  },
  computed: {
    items() {
      let valPrev = this.value > 1 ? this.value - 1 : 1 // for easier navigation - gives one previous page
      let valNext =
        this.value < this.pageCount ? this.value + 1 : this.pageCount // one next page
      let extraPrev = valPrev === 3 ? 2 : null
      let extraNext = valNext === this.pageCount - 2 ? this.pageCount - 1 : null
      let dotsBefore = valPrev > 3 ? 2 : null
      let dotsAfter = valNext < this.pageCount - 2 ? this.pageCount - 1 : null
      let output = []
      for (let i = 1; i <= this.pageCount; i += 1) {
        if (
          [
            1,
            this.pageCount,
            this.value,
            valPrev,
            valNext,
            extraPrev,
            extraNext,
            dotsBefore,
            dotsAfter,
          ].includes(i)
        ) {
          output.push({
            label: i,
            active: this.value === i,
            disable: [dotsBefore, dotsAfter].includes(i),
          })
        }
      }
      return output
    },
    hasFirst() {
      return this.value === 1
    },
    hasLast() {
      return this.value === this.pageCount
    },
  },
  methods: {
    first() {
      !this.hasFirst && this.$emit('clickPage', 1)
    },
    prev() {
      !this.hasFirst && this.$emit('clickPage', this.value - 1)
    },
    goto(page) {
      this.$emit('clickPage', page)
    },
    next() {
      !this.hasLast && this.$emit('clickPage', this.value + 1)
    },
    last() {
      !this.hasLast && this.$emit('clickPage', this.pageCount)
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  // padding: 9px;
  // .pagination__item
  &__item {
    &:not(:last-child) {
      margin-right: 14px;
    }
    &--active {
    }
    &--disable {
    }
    span {
    }
  }
  // .pagination__link
  &__link {
    height: 40px;
    min-width: 40px;
    padding: 4px 5px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray);
    background-color: transparent;
    // &:hover {
    //   color: #fff;
    //   background-color: var(--primary);
    // }
    &--active {
      color: #fff;
      background-color: var(--primary);
    }
    &--disable {
      color: var(--gray-light);
    }
  }
  &__number {
    height: 40px;
    min-width: 40px;
    padding: 4px 5px;
    border-radius: 50%;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    background-color: var(--table-even);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray);
    transition: 0.3s ease 0s;
    &:hover {
      color: #ffffff;
      background-color: var(--primary);
    }
		@media (max-width:767px) {
			height: 30px;
			min-width: 30px;
			font-size: 16px;
		}
    &--active {
      color: #ffffff;
      background-color: var(--primary);
    }
    &--disable {
      color: #ccc !important;
    }
  }
}
.p-20 {
  padding: 20px;
}
.flex {
  display: flex;
}
.flex-xy-center {
  justify-content: center;
  align-items: center;
}
</style>
