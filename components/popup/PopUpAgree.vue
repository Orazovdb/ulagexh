<template>
  <pop-up title="Подтвердите дейтсвие" width="600">
    <base-row>
      <base-col cols="6" class="mt-4"> </base-col>
      <base-col cols="3" class="mt-4">
        <base-button widthFull cancel @clickedButton="$emit('close')"
          >Cancel</base-button
        >
      </base-col>
      <base-col cols="3" class="mt-4">
        <base-button @clickedButton="$emit('send')" widthFull>Send</base-button>
      </base-col>
    </base-row>
  </pop-up>
</template>

<script>
export default {
  methods: {},
}
</script>

<style lang="scss" scoped></style>
