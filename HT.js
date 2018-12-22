"use strict"  
 var function = new Vue({ //vue funktion luonti//
    el: '.js-instance', //elementti//
    name: 'vue-instance', //vue-instanssin luonti. Tässä todennäköisesti jotain häikkää, koska ei toimi//
	
	data() {
	return {
		newItem: '', 	//listan yksi alkio
		
		items: [		// listan luonti //
		
		],
	  };
	},

	mounted() {},

	methods: {
	  removeItem(index) {
		this.items.splice(index, 1); 
	  },
	
	  add() {
	    if (this.newItem === '') { // uuden alkion lisääminen listaan //
		  return;
		}
		
	    this.items.push(this.newItem); // alkion lisäys //
	    this.newItem = ''; // uusi alkio //
	  },
    },
  });
  
