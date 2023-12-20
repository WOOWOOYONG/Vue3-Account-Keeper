<script setup lang="ts">
import { ref } from 'vue'
import { useTransaction } from '@/stores/transaction'
const title = ref('')
const amount = ref(0)
const store = useTransaction()

const handleAdd = () => {
  if (!title.value || !amount.value) {
    return
  }
  store.addTransaction(title.value, amount.value)
  title.value = ''
  amount.value = 0
}
</script>

<template>
  <div>
    <h3 class="text-h5">新增紀錄</h3>
    <div>
      <label for="text" class="block text-lg my-4">標題</label>
      <input
        v-model="title"
        type="text"
        placeholder="輸入標題"
        class="rounded px-2 py-1 text-base"
      />
    </div>
    <div>
      <label for="amount" class="block text-lg my-4">花費</label>
      <input
        v-model="amount"
        type="number"
        placeholder="輸入花費"
        class="rounded px-2 py-1 text-base"
      />
    </div>
    <button type="button" @click="handleAdd" class="px-3 rounded mt-8 cursor-pointer text-lg">
      新增
    </button>
  </div>
</template>

<style scoped></style>
