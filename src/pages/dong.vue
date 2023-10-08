<template>
  <div class="w-screen h-screen bg-gray-100">
    <div class="w-full h-full">
      <div class="flex flex-col mx-6 h-full">
        <h1 class="text-center mt-5 font-medium text-lg">دونگ</h1>
        <ButtonBack/>
        <div class="flex flex-col h-full justify-between">
          <div class="w-full flex flex-col">
            <div
              class="py-5 bg-neutral-50 text-right px-3 rounded-lg shadow-lg border-r-[6px] border-gray-900 my-2 hover:bg-gray-200"
            >
              شمال دسته جمعی
            </div>
            <div
              class="py-5 bg-neutral-50 text-right px-3 rounded-lg shadow-lg border-r-[6px] border-gray-900 my-2 hover:bg-gray-200"
            >
              پروژه شمال ایرانسل
            </div>
            <div
              class="py-5 bg-neutral-50 text-right px-3 rounded-lg shadow-lg border-r-[6px] border-gray-900 my-2 hover:bg-gray-200"
            >
              <div class="flex items-center justify-between">
                <img
                  src="../../src/assets/3dotes.svg"
                  class="w-5 ml-3"
                  alt=""
                />
                <p>تولد سعید</p>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <button
              class="bg-sky-900 text-teal-50 py-4 text-xl px-5 rounded-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {};
</script>

<style>
</style>