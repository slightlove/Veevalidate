<template>
	<div class="form-group">
		{{meta}}
		<label v-if="label" :for="id" :class="['col-form-label', labelClass]">{{
			label
		}}</label>
		<select :id="id" v-model="value" v-bind="$attrs" :class="['form-control', errorMessage && 'is-invalid']">
			<option value="" hidden>請選擇</option>
			<slot>
				<template v-if="options">
					<option
						v-for="option in options"
						:key="option"
						:value="option"
					>
						{{ option }}
					</option>
				</template>
			</slot>
		</select>
		<div v-if="errorMessage" class="invalid-feedback">{{errorMessage}}</div>
	</div>
	<button type="button" class="btn btn-danger" @click="onReset">清除欄位</button>
</template>
<script setup lang="ts">
import {computed, toRefs} from 'vue'
import {useField} from 'vee-validate'
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
)
const {name} = toRefs(props)
const { value, label: fieldLabel, errorMessage, handleReset, meta, resetField } = useField<string>(name);
const id = computed(() => fieldLabel?.toString());
const onReset = () => {
	console.log('In component');
	handleReset();
	resetField()
}
</script>