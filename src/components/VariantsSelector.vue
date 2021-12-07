<template>
  <v-container class="py-8 px-16" fluid>
    <div>
    <v-row>
      <v-col><h2>MAQE Shirt</h2></v-col>
    </v-row>
    <hr/>
    <div v-for="items in options" :key="items.slug">
       <div>
            <span>{{items.title}}</span> 
        </div>
        <div>
            <v-btn depressed class="mr-4" v-for="item in items.values" :key="item.id" 
            @click="onClick(items.slug, item.id)" :disabled="item.disabled">
              {{item.value}}
            </v-btn>
        </div> 
    </div>
	<div v-if="this.sku" class="mt-5">
		<div>Selecting SKU:</div>
        <div>{{ this.sku }}</div>
	</div>
		
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    options: [
		{
			"slug": "color",
			"title": "Choose color:",
			"values": [
				{
					"id": 1,
					"value": "Black"
				},
				{
					"id": 2,
					"value": "White"
				},
				{
					"id": 3,
					"value": "Red"
				}
			]
		},
		{
			"slug": "size",
			"title": "Choose size:",
			"values": [
				{
					"id": 1,
					"value": "S"
				},
				{
					"id": 2,
					"value": "M"
				},
				{
					"id": 3,
					"value": "L"
				},
				{
					"id": 4,
					"value": "XL"
				}
			]
		},
		{
			"slug": "sleeve",
			"title": "Choose sleeve style:",
			"values": [
				{
					"id": 1,
					"value": "Short"
				},
				{
					"id": 2,
					"value": "Long"
				}
			]
		}
	],
	skus: [
		{
			"id": 1,
			"variants": {
				"color": 1,
				"size": 1,
				"sleeve": 1
			},
			"price": 20
		},
		{
			"id": 2,
			"variants": {
				"color": 1,
				"size": 2,
				"sleeve": 1
			},
			"price": 20
		},
		{
			"id": 3,
			"variants": {
				"color": 1,
				"size": 3,
				"sleeve": 1
			},
			"price": 20
		},
		{
			"id": 4,
			"variants": {
				"color": 1,
				"size": 4,
				"sleeve": 1
			},
			"price": 20
		},
		{
			"id": 5,
			"variants": {
				"color": 1,
				"size": 1,
				"sleeve": 2
			},
			"price": 25
		},
		{
			"id": 6,
			"variants": {
				"color": 1,
				"size": 2,
				"sleeve": 2
			},
			"price": 25
		},
		{
			"id": 7,
			"variants": {
				"color": 1,
				"size": 3,
				"sleeve": 2
			},
			"price": 25
		},
		{
			"id": 8,
			"variants": {
				"color": 1,
				"size": 4,
				"sleeve": 2
			},
			"price": 25
		},
		{
			"id": 9,
			"variants": {
				"color": 2,
				"size": 1,
				"sleeve": 1
			},
			"price": 20
		},
		{
			"id": 10,
			"variants": {
				"color": 2,
				"size": 2,
				"sleeve": 1
			},
			"price": 20
		},
		{
			"id": 11,
			"variants": {
				"color": 2,
				"size": 3,
				"sleeve": 1
			},
			"price": 20
		},
		{
			"id": 12,
			"variants": {
				"color": 2,
				"size": 4,
				"sleeve": 1
			},
			"price": 20
		},
		{
			"id": 19,
			"variants": {
				"color": 3,
				"size": 3,
				"sleeve": 1
			},
			"price": 30
		},
		{
			"id": 20,
			"variants": {
				"color": 3,
				"size": 4,
				"sleeve": 1
			},
			"price": 30
		},
		{
			"id": 22,
			"variants": {
				"color": 3,
				"size": 2,
				"sleeve": 2
			},
			"price": 35
		},
		{
			"id": 23,
			"variants": {
				"color": 3,
				"size": 3,
				"sleeve": 2
			},
			"price": 35
		}
	],
    selectedColor:  '',
    selectedSize: '',
    selectedSleeve: '',
    sku: ''
  }),
  created() {
    this.options.forEach(item => {
       item.values.forEach(element => { item.slug === 'color' ? element.disabled = false : element.disabled = true})
    })
  },
  methods: {
	onClick(slug, id) {

		if(slug === 'color') {
	
		this.selectedColor = id

		let optionsCopy = [...this.options]

		let optionSlugColor = this.options.find(option => option.slug === slug)
		//disable bttn
		optionSlugColor.values.forEach(item => item.id !== id ? item.disabled = true : item.disabled = false)

		//find option 
		let findOptionSize = this.options.find(option => option.slug === 'size')

		let skuColor = this.skus.filter(sku => sku.variants[slug] === id)

		findOptionSize.values.reduce((arr, item) => {
			let match = skuColor.find(el => el.variants.size == item.id)
			if(match){
					item.disabled = false
			}
			return arr

		}, [])

		this.options = optionsCopy

		} else if( slug === 'size') {

			this.selectedSize = id

			let optionsCopy = [...this.options]

			let optionSlugSize = optionsCopy.find(option => option.slug === slug)
			//disable bttn
			optionSlugSize.values.forEach(item => item.id !== id ? item.disabled = true : item.disabled = false)

			//find option
			let findOptionSleeve = optionsCopy.find(option => option.slug === 'sleeve')
			console.log(findOptionSleeve, 'findOptionSleeve')

			let skuSize = this.skus.filter(sku => sku.variants.color === this.selectedColor && sku.variants[slug] === id)
			console.log(skuSize, 'skuSize')

			findOptionSleeve.values.reduce((arr, item) => {
			let match = skuSize.find(el => el.variants.sleeve == item.id)
			if(match){
					item.disabled = false
			}
			return arr

		}, [])

		this.options = optionsCopy

		} else if(slug === 'sleeve') {
			this.selectedSleeve = id

			let optionSlugSleeve = this.options.find(option => option.slug === slug)
			//disable bttn
			optionSlugSleeve.values.forEach(item => item.id !== id ? item.disabled = true : item.disabled = false)
		}

		this.sku = this.skus.find(value => {
            return value.variants.color === this.selectedColor && value.variants.size === this.selectedSize && value.variants.sleeve === this.selectedSleeve
        })
	}
  }
}
</script>


<style scoped>
</style>
