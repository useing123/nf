<template>
  <div>
    <label for="city">City:</label>
    <input type="text" v-model="city" id="city">
    <label for="work">Profession:</label>
    <input type="text" v-model="work" id="work">
    <label for="years_of_experience">Years of experience:</label>
    <input type="number" v-model="years_of_experience" id="years_of_experience">
    <button @click="getHourlyRate">Get hourly rate</button>
    <div v-if="result">
      <p>The hourly rate for your work in {{ city }} is:</p>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      city: '',
      work: '',
      years_of_experience: '',
      result: '',
    }
  },
  methods: {
    async getHourlyRate() {
      const response = await this.$axios.post('/api/', {
        city: this.city,
        work: this.work,
        years_of_experience: this.years_of_experience,
      })
      console.log(response.data) // log the response data to the console
      this.result = response.data.answer
    },
  },
}
</script>