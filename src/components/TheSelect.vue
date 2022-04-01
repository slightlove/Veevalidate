<template>
  <component :is="is" :class="['form-group', containerClass, inline && 'row']">
    <label v-if="label" :for="id" :class="['col-form-label', labelClass]">{{
      label
    }}</label>
    <div :class="selectClass">
      <select
        :id="id"
        v-model="value"
        v-bind="$attrs"
        :class="['form-control', errorMessage && 'is-invalid']"
      >
        <option value="" hidden>請選擇</option>
        <slot>
          <template v-if="options">
            <option v-for="option in options" :key="option" :value="option">
              {{ option }}
            </option>
          </template>
        </slot>
      </select>
      <div v-if="errorMessage" class="invalid-feedback">{{ errorMessage }}</div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { computed, toRef } from "vue";

const props = withDefaults(
  defineProps<{
    is?: string;
    name?: string;
    label?: string;
    inline?: boolean;
    containerClass?: string;
    labelClass?: string;
    selectClass?: string;
    options?: string[];
  }>(),
  {
    is: "div",
    name: "",
    label: undefined,
    inline: false,
    containerClass: "",
    labelClass: "",
    selectClass: "",
    options: undefined,
  }
);

// const { name } = toRefs(props);
const { value, label: fieldLabel, errorMessage } = useField<string>(toRef(props, 'name'));
const id = computed(() => fieldLabel?.toString());

</script>
