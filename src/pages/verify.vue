<template>
  <div class="w-screen h-screen flex flex-col bg-gray-100">
    <div class="w-full h-full mt-16">
      <p class="flex flex-col items-center">لطفا کد دریافت شده را وارد کنید</p>

      <div class="flex space-x-5 mx-16 my-10 md:mx-28 xl:mx-72">
        <input
          class="w-full h-full py-3 items-center justify-center text-center outline-none rounded-md border text-lg bg-amber-50 focus:bg-gray-30 focus:ring-1 "
          type="text"
          v-for="i in 4"
          v-model="digits[i - 1]"
          :key="i"
          maxlength="1"
          v-on:keyup="onTextKey"
        />
      </div>
      <div class="w-full flex flex-col">
        <button
          type="submit"
          class="text-slate-100 py-3 bg-gray-400 mx-10 md:mx-28 xl:mx-72 rounded-lg"
        >
          تایید
        </button>
        <div class="flex flex-col items-center mt-6">
          <p class="text-gray-400">کدی دریافت نکردید</p>
          <div class="flex text-gray-400">
            ثانیه تا ارسال مجدد
            <div class="text-stone-950"><strong>&nbsp;120</strong></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      digits: [],
    };
  },
  computed: {
    code() {
      return this.digits.join("");
    },
  },
  methods: {
    onTextKey(event) {
      const key = event.key;

      if (["Tab", "Shift", "Meta", "Control", "Alt", "Enter"].includes(key)) {
        return;
      }

      if (["Delete"].includes(key)) {
        return;
      }
      if (key === "ArrowLeft" || key === "Backspace") {
        if (event.target.previousElementSibling) {
          event.target.previousElementSibling.focus();
        }
      } else {
        if (event.target.nextElementSibling) {
          event.target.nextElementSibling.focus();
        }
      }
    },
  },
};
</script>

