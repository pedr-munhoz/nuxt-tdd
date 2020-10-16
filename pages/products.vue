<template>
  <div>
    <table-presentation :title="title" />
  </div>
</template>

<script>
import TablePresentation from '@/components/TablePresentation';

export default {
  name: 'ProductsPage',
  components: {
    TablePresentation,
  },

  data: () => ({
    title: 'Products',
  }),
};
</script>

<style></style>
