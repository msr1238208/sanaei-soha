<template>
  <div
    class="w-full h-full fixed bg-slate-700 bg-opacity-60 flex flex-col items-center px-2"
  >
    <div class="w-full md:w-2/5 p-5 my-auto bg-secondary-200 rounded-xl">
      <p class="font-extrabold flex flex-col items-center">ایجاد پروژه</p>
      <div class="text-right pt-6">
        <p class="font-semibold pb-2">نام پروژه</p>
        <input
          type="text"
          dir="rtl"
          v-model="nameProject"
          class="rounded-lg w-full p-2"
        />

        <p class="font-semibold py-2 mt-4">نام گروه مادر خرج</p>
        <input
          type="text"
          dir="rtl"
          v-model="nameGroupeCost"
          class="rounded-lg w-full p-2"
        />
      </div>

      <div class="flex flex-col mt-16 my-3 space-y-3 p-">
        <button
          class="bg-zinc-500 text-white rounded-md p-2"
          @click="defineProject"
        >
          ایجاد پروژه
        </button>
        <button
          class="border-2 border-secondary-500 rounded-md text-gray-500 p-2"
          @click="$emit('close')"
        >
          انصراف
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toast-notification";

export default {
  data() {
    return {
      nameProject: "",
      nameGroupeCost: "",
    };
  },
  methods: {
    defineProject(nameProject, nameGroupeCost) {
      console.log("added");
      axios
        .post("https://soha.iran.liara.run/api/v1/dong/project", {
          name: this.nameProject,
          host_group_name: this.nameGroupeCost,
        })
        .then((response) => {
          console.log(response);
          const $toast = useToast();
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          const $toast = useToast();
          $toast.error(error.response.message);
        });
    },
  },
};
</script>

<style>
</style>