<script setup lang="ts">
import { useTransaction } from '@/stores/transaction'
import { storeToRefs } from 'pinia'

const { transactions } = storeToRefs(useTransaction())
const { removeTransaction } = useTransaction()
</script>
<template>
  <div class="mb-8">
    <h3 class="text-h5">History</h3>
    <ul v-auto-animate="{ duration: 100 }">
      <template v-for="transaction in transactions" :key="transaction.id">
        <li :class="transaction.type" class="text-lg mb-2">
          {{ transaction.title }}
          <span>${{ transaction.amount }}</span>
          <button
            type="button"
            @click="removeTransaction(transaction.id)"
            class="ml-4 cursor-pointer"
          >
            X
          </button>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>
.plus {
  color: green;
}
.minus {
  color: red;
}
</style>
