<template>
  <div class="table">
    <table>
      <slot />
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.table {
  width: 100%;
  background-color: #fff;
  border: 1px solid var(--admin-input);
  border-radius: 10px;
  table {
    width: 100%;
    border-spacing: 0px;
    thead {
      tr {
        th {
          text-align: left;
          font-weight: 700;
          font-size: 16px;
          line-height: 120%;
          color: var(--admin-text);
          padding: 20px;
          &:first-child {
            text-align: center;
            width: 70px;
          }
          &.width-auto {
            width: 100%;
          }
          &.tal {
            text-align: left;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          font-weight: 500;
          font-size: 14px;
          line-height: 120%;
          color: var(--admin-text);
          padding: 14px 20px;
          border-top: 1px solid #f5f6f7;
          &:first-child {
            width: 70px;
          }

          &.tac {
            text-align: center;
          }

          &.td-icon {
            width: 40px;
            height: 40px;
            img {
              width: 100%;
              height: 100%;
            }
          }

          &.width-auto {
            width: 100%;
          }

          &.width-300 {
            text-align: left;
            width: 500px;
          }

          &:last-child {
            width: 50px;
          }

          .table-img {
            width: 60px;
            height: 60px;
            background-color: #f6f6f6;
            border-radius: 4px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
              border-radius: 4px;
            }
          }

          .table-icons {
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }
      }
    }
  }
}
</style>
