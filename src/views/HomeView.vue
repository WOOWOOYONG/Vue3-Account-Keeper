<script setup lang="ts">
import BalanceSheet from '@/components/BalanceSheet.vue'
import HistoryList from '@/components/HistoryList.vue'
import AddTransaction from '@/components/AddTransaction.vue'
</script>

<template>
  <main class="container pt-10 mx-auto">
    <section class="flex justify-center flex-col items-center">
      <BalanceSheet />
      <HistoryList />
      <AddTransaction />
    </section>
  </main>
</template>
