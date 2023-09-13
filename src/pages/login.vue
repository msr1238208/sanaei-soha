<template>
  <div class="w-screen h-screen bg-gray-100">
    <div class="w-full h-full flex flex-col items-center">
      <div class="mb-10 mt-5">
        <img src="../assets/soha-logo.jpg" width="150" class="md:w-52" />
      </div>

      <div class="w-full">
        <div class="flex flex-col mx-5 md:mx-28 lg:mx-52 xl:mx-64">
          <label class="text-right mb-1">شماره موبایل</label>
          <input type="tel" class="px-10 py-3 outline-none rounded-lg" />
          <p class="text-right mt-1 text-red-500 text-xs mb-7">
            شماره موبایل خالی نمی تواند باشد
          </p>
          <div class="w-full flex flex-col">
            <button
              type="submit"
              class="text-slate-100 py-3 bg-gray-400 rounded-lg"
            >
              ورود یا ثبت نام
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>