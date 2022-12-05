<template>
  <q-page padding>
    <h2>Liste des clients</h2>
    <q-list>
      <!-- TODO utiliser client-view lors de l'appel -->
      <ClientView
        v-for="client in listeClients"
        :key="client.id"
        :client="client"
        class="q-mb-md rounded-borders"/>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ClientView from './Client'

export default {
  name: 'ClientPage',
  components: {
    ClientView
  },
  computed: {
    // Mappage des getters ('nomNamespace', ['nomGetter'])
    ...mapGetters('clients', ['listeClients'])
  },
  methods: {
    ...mapActions('clients', ['getClientsApi'])
  },
  mounted () {
    this.getClientsApi()
  }
}
</script>

<style scoped>

</style>
