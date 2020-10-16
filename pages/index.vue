<template>
  <div>
    <table-presentation :title="title" />
  </div>
</template>

<script>
import TablePresentation from '@/components/TablePresentation';

export default {
  name: 'UsersPage',
  components: {
    TablePresentation,
  },

  data: () => ({
    title: 'Users',
  }),
};
</script>
