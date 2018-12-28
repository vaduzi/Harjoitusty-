"use strict";
var app = new Vue({
  //vue funktion luonti//

  /* fixed binding  */
  el: "#app", //elementti//
  name: "vue-instance", //vue-instanssin luonti. Tässä todennäköisesti jotain häikkää, koska ei toimi//

  data: function () {
    return {
      newItem: "", //listan yksi alkio

      items: [
        // listan luonti //
      ]
    };
  },

  // removed unused lifecycle hook
  //mounted() {},

  methods: {
    removeItem(index) {
      this.items.splice(index, 1);
    },

    add: function () {
      console.log("add called")
      if (this.newItem === "") {
        // uuden alkion lisääminen listaan //
        return;
      }

      this.items.push(this.newItem); // alkion lisäys //
      this.newItem = ""; // uusi alkio //
    }
  }
});