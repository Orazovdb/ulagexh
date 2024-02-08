<template>
  <div class="news-inside">
    <div class="news-inside__flex">
      <div class="news-inside__left">
        <div class="news-inside__left-image">
          <img :src="`${imgURL}news/${item.img_path}`" alt="" />
        </div>
        <div class="flex flex-y-center gap-10 mb-2">
          <p class="news-inside__left-date">
            {{ new Date(item.date).toLocaleDateString() }}
          </p>
          <div class="flex flex-y-center gap-3">
            <base-icon class="ca" icon="adminEye"></base-icon>
            <p class="news-inside__left-views">{{ item.views_count }}</p>
          </div>
        </div>
        <h3
          class="news-inside__left-title"
          v-if="normalizeTextByLang(item, 'title')[$i18n.locale]"
          v-html="normalizeTextByLang(item, 'title')[$i18n.locale]"
        ></h3>
        <p
          class="news-inside__left-description"
          v-if="normalizeTextByLang(item, 'text')[$i18n.locale]"
          v-html="normalizeTextByLang(item, 'text')[$i18n.locale]"
        ></p>
      </div>
      <div class="news-inside__right">
        <div class="news-inside__right-wrapper">
          <div class="news-inside__right-block">
            <div class="news-inside__right-button">
              <base-button @clickedButton="openNews" widthFull>
                {{ $t('otherNews') }}</base-button
              >
              <div class="news-inside__right-items">
                <the-news-inside-item
                  v-for="column in columns"
                  :key="column.uuid"
                  :item="column"
                  @open="openNewPage"
                ></the-news-inside-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getNews } from '@/api/user.api'

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      columns: [],
      limit: 20,
      page: 1,
      pageLength: 1,
    }
  },
  computed: {
    ...mapGetters(['isPopup', 'imgURL']),
  },

  async fetch() {
    await this.getAllNews()
  },

  methods: {
    normalizeTextByLang(dontNormalItem, prefix = 'title' && 'text') {
      return {
        tm: dontNormalItem[`${prefix}_tm`],
        ru: dontNormalItem[`${prefix}_ru`],
        en: dontNormalItem[`${prefix}_en`],
      }
    },

    openNews() {
      {
        const path =
          this.$i18n.locale === 'tm' ? `/news/` : `/${this.$i18n.locale}/news/`
        this.$router.push(path)
      }
    },

    openNewPage(id) {
      const path =
        this.$i18n.locale === 'tm'
          ? `/news/${id}`
          : `/${this.$i18n.locale}/news/${id}`
      this.$router.push(path)
    },

    async getAllNews() {
      try {
        const { data, status } = await getNews({
          params: { l: 3, p: 1 },
        })
        if (!status) return
        this.pageLength = Math.ceil(data.data.count / this.limit)
        this.columns = data.data.news
        console.log(this.columns)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ca {
  cursor: auto;
}
.news-inside {
  padding-bottom: 130px;
  @media (max-width: 767px) {
    padding-bottom: 80px;
  }
  &__container {
  }

  &__flex {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    @media (max-width: 767px) {
      flex-wrap: wrap;
    }
  }

  &__left {
    flex: 0 1 68%;
    @media (max-width: 767px) {
      flex: 0 1 100%;
    }
  }

  &__left-image {
    height: 550px;
    margin-bottom: 14px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 8px;
    }
    @media (max-width: 767px) {
      height: 350px;
      margin-bottom: 6px;
    }
    @media (max-width: 479px) {
      height: 186px;
    }
  }

  &__left-date {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: var(--primary);
    @media (max-width: 767px) {
      font-size: 16px;
    }
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }

  &__left-views {
    font-size: 16px;
    font-weight: 500;
  }

  &__left-title {
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: var(--light-black);
    margin-bottom: 20px;
    @media (max-width: 767px) {
      margin-bottom: 14px;
      font-size: 26px;
    }
    @media (max-width: 479px) {
      font-size: 12px;
      font-size: 20px;
    }
  }

  &__left-description {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: var(--black);
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  &__right {
    flex: 0 1 28%;
    position: relative;
    @media (max-width: 767px) {
      flex: 0 1 100%;
    }
  }

  &__right-wrapper {
  }

  &__right-block {
  }

  &__right-button {
  }

  &__right-items {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
