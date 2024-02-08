<template>
  <div class="file-input">
    <label>
      <input @change="change" type="file" />
      <div v-if="!imgPath" class="file-input__content">
        <base-icon icon="adminImg"></base-icon>
        <p>Add photo</p>
      </div>
      <img v-else :src="imgPath" alt="" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgPath: null,
    }
  },
  methods: {
    change(event) {
      this.imgPath = URL.createObjectURL(event?.target?.files[0])
      this.$emit('file', event.target.files[0])
    },
  },
}
</script>

<style lang="scss" scoped>
.file-input {
  position: relative;
  width: 100%;
  min-height: 100%;
  border: 1px dashed #969494;
  border-radius: 2px;

  label {
    width: 100%;
    display: inline-block;
    cursor: pointer;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 130px;
      height: 130px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: cover;
      object-position: center;
    }
  }

  input {
    visibility: hidden;
    width: 100%;	
    height: 100%;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #969494;
    }
  }
}
</style>
