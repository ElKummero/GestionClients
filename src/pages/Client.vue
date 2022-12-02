<template>
    <!-- Un élément de liste, un client -->
    <q-item clickable v-ripple>
      <!-- Photo du client -->
      <q-item-section avatar>
        <q-avatar>
          <img :src="client.picture.thumbnail">
        </q-avatar>
      </q-item-section>

      <!-- Nom, prénom et email du client -->
      <q-item-section>
        <q-item-label lines="1">
          {{ client.name.first + ' ' + client.name.last }}
        </q-item-label>
        <q-item-label caption lines="2">
          {{ client.email }}
        </q-item-label>
      </q-item-section>

      <!-- Icône email -->
      <q-item-section side>
        <q-icon name="email" color="primary"/>
      </q-item-section>
    </q-item>
</template>

<script>
export default {
  name: 'ClientView',
  props: {
    client: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
