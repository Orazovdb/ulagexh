<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>{{ $t('table.carParts') }}</th>
          <th>{{ $t('table.loadOpacity') }}</th>
          <th>{{ $t('table.price') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Kamaz-6520</td>
          <td>20.00 tonna</td>
          <td>
            <p>{{ $t('table.normalShipping') }} - 130.00</p>
            <p>{{ $t('table.dangerousGoods') }} - 180.00</p>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Volvo F12</td>
          <td>24.00 tonna</td>
          <td>115.00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Renault</td>
          <td>27.00 tonna</td>
          <td>115.00</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Mercedes</td>
          <td>24.00 tonna</td>
          <td>150.00</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Iveko</td>
          <td>24.00 tonna</td>
          <td>115.00</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Treýler (ýarym tirkeg)</td>
          <td>18.50 tonna</td>
          <td>105.00</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Kamaz 5490 (tirkegsiz)</td>
          <td>30.00 tonna</td>
          <td>136.00</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Kamaz 5490 we “Nefaz-93341” (tentli ýarym tirkeg)</td>
          <td>30.00 tonna</td>
          <td>150.00</td>
        </tr>
        <tr>
          <td>9</td>
          <td>“Nefaz-93341” (tentli ýarym tirkeg)</td>
          <td>30.00 tonna</td>
          <td>80.00</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Maral (sement daşamak üçin tirkeg)</td>
          <td>27.00 tonna</td>
          <td>60.00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-radius: 10px;
  table {
    width: 100%;
    border-spacing: 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #e7ecf8;
    border-radius: 10px;
    thead {
      background-color: var(--light-blue);
      tr {
        th {
          padding: 20px;
          font-weight: 500;
          font-size: 16px;
          line-height: calc(19 / 16) * 100%;
          color: var(--light-black);
          text-align: left;
          &:first-child {
            width: 40px;
          }
          &:last-child {
            width: 20%;
          }
          @media (max-width: 767px) {
            font-size: 14px;
            line-height: calc(15 / 12) * 100%;
            padding: 6px 10px;
          }
          @media (max-width: 767px) {
            font-size: 12px;
            line-height: calc(13 / 10) * 100%;
          }
        }
      }
    }
    tbody {
      width: 100%;
      tr {
        &:nth-child(even) {
          background-color: var(--table-even);
        }
        td {
          font-size: 16px;
          line-height: calc(19 / 16) * 100%;
          padding: 14px 20px;
          font-weight: 400;
          color: var(--gray);
          &:first-child {
            width: 40px;
            text-align: center;
            font-weight: 700;
          }
          &:last-child {
            width: 30%;
          }
          p {
            &:not(:last-child) {
              margin-bottom: 6px;
            }
          }
          @media (max-width: 767px) {
            font-size: 14px;
            line-height: calc(15 / 12) * 100%;
            padding: 6px 10px;
          }
          @media (max-width: 479px) {
            font-size: 12px;
            line-height: calc(13 / 10) * 100%;
            &:first-child {
              width: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
