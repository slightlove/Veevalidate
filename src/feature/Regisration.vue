<template>
	<div class="container">
		<the-select name="addrCity" select-class="col" @change="onCityChange">
			<option value="city1">city1</option>
			<option value="city2">city2</option>
			<option value="city3">city3</option>
		</the-select>
		<the-select name="addrArea" select-class="col" >
			<option v-for="opt in areaList" :key="opt" :value="opt">
				{{ opt }}
			</option>
		</the-select>
		<the-select-simple name="addrName" select-class="col" >
			<option value="name1">Name1</option>
			<option value="name2">Name2</option>
			<option value="name3">Name3</option>
		</the-select-simple>
		<button class="btn btn-outline-primary" @click="onClean">清空</button>
		<button class="btn btn-outline-primary" @click="usingAssign">
			指定
		</button>
	</div>
</template>
<script setup lang="ts">
	import { ref } from 'vue'
	import { toFormValidator } from '@vee-validate/zod'
	import { useForm, useField } from 'vee-validate'
	import { userSchema } from '@/assets/formSchema.type'
	import TheSelect from '@/components/TheSelect.vue'
	import TheSelectSimple from '@/components/TheSelectSimple.vue'

	useForm<userSchema>({
		validationSchema: toFormValidator(userSchema) as never,
		initialValues: {
			addrArea: '',
			addrCity: '',
			addrName: '',
		},
	})

	const {
		handleReset: resetCityField,
	} = useField<string | undefined>('addrCity')
	const {
		value: addrArea,
		handleReset: resetAreaField,
	} = useField<string | undefined>('addrArea')
	const {
		value: addrName,
		handleReset: resetNameField
	} = useField<string>('addrName')

	const areaList = ref<string[]>([])
	const onClean = () => {
		// handleReset()
		resetCityField()
		console.log(addrName.value)
		if (addrArea.value) {
			resetAreaField()
			resetNameField()
		}
	}

	const onCityChange = () => {
		const random = Math.floor(Math.random() * 50 + 1)
		for (let i = 0; i < random; i++) {
			areaList.value.push(`city${i}`)
		}

		if (addrArea.value) {
			resetAreaField()
			resetNameField()
		}
	}

	const usingAssign = () => {
		addrArea.value = ''
	}
</script>
