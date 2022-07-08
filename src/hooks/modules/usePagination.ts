import { ref } from 'vue'

type Callback = () => void

type Options = {
  defaultPageSize: number
}

export default function usePagination(callback: Callback, { defaultPageSize = 10 }: Options) {
  const current = ref(1)
  const pageSize = ref(defaultPageSize)
  const total = ref(0)

  function changeCurrent(size: number) {
    current.value = size
    callback()
  }

  function changePageSize(size: number) {
    current.value = 1
    pageSize.value = size
    callback()
  }

  function setTotal(value: number) {
    total.value = value
  }

  return {
    current,
    pageSize,
    total,
    changeCurrent,
    changePageSize,
    setTotal
  }
}
