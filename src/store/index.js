import { defineComponent } from 'vue'
import { useStore } from 'pinia'

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      store,
    }
  },
})