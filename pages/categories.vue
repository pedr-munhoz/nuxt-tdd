<template>
  <div>
    <table-presentation :title="title" :headers="[]" :items="[]" />
  </div>
</template>

<script>
import TablePresentation from '@/components/TablePresentation';

export default {
  name: 'CatogoriesPage',
  components: {
    TablePresentation,
  },

  data: () => ({
    title: 'Categories',
  }),
};
</script>

<style></style>
