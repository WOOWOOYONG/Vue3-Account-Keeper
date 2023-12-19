import { beforeEach, it, expect, describe } from 'vitest'
import { useTransaction } from './transaction'
import { setActivePinia, createPinia } from 'pinia'

describe('use transaction', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('add transaction', () => {
    it('should add a transaction', () => {
      const store = useTransaction()

      const transaction = store.addTransaction('買衛生紙', -200)
      expect(transaction).toEqual(
        expect.objectContaining({
          title: '買衛生紙',
          amount: -200,
          type: 'minus'
        })
      )
      expect(store.transactions[0]).toEqual(transaction)
    })
    it('should add a positive transaction', () => {
      const store = useTransaction()
      const transaction = store.addTransaction('幫人遛狗', +600)
      expect(transaction).toEqual(
        expect.objectContaining({
          title: '幫人遛狗',
          amount: +600,
          type: 'plus'
        })
      )
      expect(store.transactions[0]).toEqual(transaction)
    })
  })

  describe('remove transaction', () => {
    it('should remove a transaction by its id', () => {
      const store = useTransaction()
      const transaction = store.addTransaction('送快遞', +1000)
      store.removeTransaction(transaction.id)
      expect(store.transactions.length).toBe(0)
    })
    it('should not remove a transaction if it doesnot exist', () => {
      const store = useTransaction()
      store.addTransaction('送快遞', +1000)
      store.removeTransaction(100)
      expect(store.transactions.length).toBe(1)
    })
  })
  it('should return total amount', () => {
    const store = useTransaction()
    store.addTransaction('買衣服', -1000)
    store.addTransaction('撿到錢', +1500)
    expect(store.totalAmount).toBe(500)
  })

  it('should return total income', () => {
    const store = useTransaction()
    store.addTransaction('Income1', +600)
    store.addTransaction('Income2', +400)

    expect(store.totalIncome).toBe(1000)
  })

  it('should return total expense', () => {
    const store = useTransaction()
    store.addTransaction('Expense1', -600)
    store.addTransaction('Expense2', -400)

    expect(store.totalExpense).toBe(-1000)
  })
})
