import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

interface Transaction {
  id: number
  title: string
  amount: number
  type: 'plus' | 'minus'
}

let Id = 0

export const useTransaction = defineStore('transaction', () => {
  const transactions = reactive<Transaction[]>([])

  // 新增紀錄
  const addTransaction = (title: string, amount: number) => {
    const id = Id++
    const transaction: Transaction = {
      id,
      title,
      amount,
      type: amount > 0 ? 'plus' : 'minus'
    }
    transactions.push(transaction)

    return transaction
  }

  // 刪除紀錄
  const removeTransaction = (id: number) => {
    const index = transactions.findIndex((t) => t.id === id)
    if (index !== -1) {
      transactions.splice(index, 1)
    }
  }

  // 計算餘額
  const totalAmount = computed(() => {
    return transactions.reduce((total, t) => total + Number(t.amount), 0)
  })

  // 計算總收入
  const totalIncome = computed(() => {
    return transactions
      .filter((t) => t.type === 'plus')
      .reduce((total, t) => total + Number(t.amount), 0)
  })

  // 計算總支出
  const totalExpense = computed(() => {
    return transactions
      .filter((t) => t.type === 'minus')
      .reduce((total, t) => total + Number(t.amount), 0)
  })

  return {
    transactions,
    addTransaction,
    removeTransaction,
    totalAmount,
    totalIncome,
    totalExpense
  }
})
