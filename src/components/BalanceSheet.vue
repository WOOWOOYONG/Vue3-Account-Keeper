<script setup lang="ts">
import { useTransaction } from '@/stores/transaction'
import { storeToRefs } from 'pinia'
import { type User } from '@/types'

const user: User = {
  name: 'Yong',
  jobTitle: 'HomeLess'
}

const { totalAmount, totalIncome, totalExpense } = storeToRefs(useTransaction())
</script>
<template>
  <div class="mb-8">
    <span class="mr-4 font-semibold">{{ user.jobTitle }}</span>
    <span class="mr-4 font-semibold">{{ user.name }}</span
    >的記帳本
  </div>
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
