<script setup lang="ts">
import { useTransaction } from '@/stores/transaction'
import { storeToRefs } from 'pinia'

const { totalAmount, totalIncome, totalExpense } = storeToRefs(useTransaction())
</script>
<template>
  <div class="mb-8">
    <div class="mb-10">
      <h2 class="text-xl">餘額</h2>
      <p class="text-lg">{{ totalAmount }}</p>
    </div>
    <div class="flex gap-12">
      <div>
        <h3 class="text-xl">收入</h3>
        <p class="text-lg">+{{ totalIncome }}</p>
      </div>
      <div>
        <h3 class="text-xl">支出</h3>
        <p class="text-lg">{{ totalExpense }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
