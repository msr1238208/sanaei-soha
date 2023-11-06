<template>
  <div
    class="py-5 bg-neutral-50 text-right px-3 rounded-lg shadow-lg border-r-[6px] border-gray-900 my-2 hover:bg-gray-200"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

