<template>
  <v-container>
    <v-form>
      <v-text-field v-model="city" label="City" required></v-text-field>
      <v-text-field v-model="work" label="Profession" required></v-text-field>
      <v-text-field v-model="years_of_experience" label="Years of experience" required></v-text-field>
      <v-btn @click="getHourlyRate">Get hourly rate</v-btn>
      <v-card v-if="result">
        <v-card-title>The hourly rate for your work in {{ city }} is:</v-card-title>
        <v-card-text>{{ result }}</v-card-text>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
import { VBtn, VCard, VCardTitle, VCardText, VContainer, VForm, VTextField } from 'vuetify/lib'

export default {
  components: {
    VBtn,
    VCard,
    VCardTitle,
    VCardText,
    VContainer,
    VForm,
    VTextField,
  },
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
