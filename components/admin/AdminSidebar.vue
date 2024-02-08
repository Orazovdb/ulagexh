<template>
  <div class="admin-sidebar">
    <nav class="admin-sidebar__menu">
      <ul class="admin-sidebar__list">
        <li v-for="link in menu" :key="link.id" class="admin-sidebar__item">
          <nuxt-link
            class="admin-sidebar__link"
            exact
            :to="localePath(`/admin${link.to}`)"
          >
            <base-icon
              class="admin-sidebar__icon"
              :icon="link.icon"
            ></base-icon>
            <span class="admin-sidebar__name">{{ link.name }}</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          id: 1,
          to: '/',
          icon: 'adminSlider',
          name: 'Slider',
        },
        {
          id: 2,
          to: '/counter',
          icon: 'adminCounter',
          name: 'Şotçik',
        },
        {
          id: 3,
          to: '/about-us',
          icon: 'adminAbout',
          name: 'Biz barada',
        },
        {
          id: 4,
          to: '/services',
          icon: 'adminServices',
          name: 'Hyzmatlarymyz',
        },
        {
          id: 5,
          to: '/news',
          icon: 'adminNews',
          name: 'Täzelikler',
        },
        {
          id: 6,
          to: '/laws',
          icon: 'adminLaws',
          name: 'Kadalaşdyryjy hukuknamalar',
        },
        {
          id: 7,
          to: '/orders',
          icon: 'adminLaws',
          name: 'Sargytlar',
        },
        {
          id: 8,
          to: '/contact-us',
          icon: 'adminTable',
          name: 'Habarlaşmak üçin',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.admin-sidebar {
  padding: 30px 20px;
  border-right: 1px solid #edeff2;
  &__menu {
    height: calc(100vh - 150px);
    overflow-y: auto;
  }

  &__list {
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px;
    transition: 0.3s ease 0s;
    color: var(--admin-text);
    &:hover {
      background-color: #fff;
      box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
      border-radius: 10px;
      color: var(--primary);
    }
    &.nuxt-link-active,
    &.nuxt-link-exact-active {
      background-color: #fff;
      box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
      border-radius: 10px;
      color: var(--primary);
    }
  }

  &__icon {
  }

  &__name {
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
  }
}
</style>
