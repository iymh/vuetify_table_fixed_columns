var v_main = new Vue({
  el: '#main',
  vuetify: new Vuetify(),

  data: function() {
    return {
      headers: [
        { text:'No.', value:'no', width:'5rem' },
        { text:'Item1', value:'item1', width:'10rem' },
        { text:'Item2', value:'item2', width:'10rem' },
        { text:'Item3', value:'item3', width:'10rem' },
        { text:'Item4', value:'item4', width:'10rem' },
        { text:'Item5', value:'item5', width:'10rem' },
        { text:'Item6', value:'item6', width:'10rem' },
        { text:'', value:'', width:'3.5rem' }, // Btn 1
        { text:'', value:'', width:'3.5rem' }, // Btn 2
      ],
      items: [
        { no: 1, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 2, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 3, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 4, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 5, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 6, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 7, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 8, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 9, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 10, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 11, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 12, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 13, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 14, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
        { no: 15, item1:'item1', item2:'item2', item3:'item3', item4:'item4', item5:'item5', item6:'item6' },
      ],
    }
  },

  computed: {
  },

  watch: {
  },

  methods: {

  },

  updated() {
    console.log("main vue updated.");
  },

  mounted() {
    console.log("main vue mounted.");
  },
})