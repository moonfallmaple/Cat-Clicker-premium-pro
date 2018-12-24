
/* ======= Views ======= */
let catView = {
    init: function(){
    this.catImage = document.getElementById("cat-img"); //the cat image
    this.catName = document.getElementById("cat-name"); //the cat's name above the image
    this.clickCount = document.getElementById("cat-count"); //display for number of times this cat was clicked
   
    //on click, increment the current cat's click count
    this.catImage.addEventListener('click', function(){
        octopus.incrementCounter();
    });
    this.render();
    },
    
    render: function(){
        var currentCat = octopus.getCurrentCat(); //calls the current cat from octopus
        this.clickCount.textContent = "Number of times this cat was clicked: " + currentCat.clickCount;
        this.catName.textContent = currentCat.name;
        this.catImage.src = currentCat.imgSrc;
    }
};

let catListView = {
    init: function(){
        this.catList = document.getElementById('cat-list');//store the DOM element for easy access.
        
        this.render();   //update the DOM elements with the right values.
    },
    
    render: function(){
        var i, cat, catElem;
        
        
        var cats = octopus.getCats();//call the array of cats from octopus
        
        this.catList.innerHTML= '';
        
        //loop over each cat in our array of cats
        for (i = 0; i < cats.length; i++) {
            
            //This is the cat number that we are on
            cat = cats[i];
             
            //create a DOM element for each cat
            catElem = document.createElement('li'); //create li element
            catElem.textContent = cat.name; //fills the content of li with the cat's name
            
            //when the cat's name in the list is clicked, update the cat's picture
            catElem.addEventListener('click', (function(catCopy) {
                return function(){
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                    adminView.render();
                };
            })(cat));

            this.catList.appendChild(catElem); //append li elements to the list
        }
    }
    
};

let adminView = {
    init: function(){
        this.adminArea= document.getElementById("admin-view");

        // element of 3 input forms
        this.adminName = document.getElementById("admin-name");
        this.adminURL = document.getElementById("admin-url");
        this.adminClicks = document.getElementById("admin-number");

        // element of 3 buttons
        this.adminBtn = document.getElementById("adminBtn");
        this.adminCancel = document.getElementById("admin-cancel");
        this.adminSave = document.getElementById("admin-save");
        
        this.adminBtn.addEventListener('click', function(){ //shows the admin display.
            octopus.adminDisplay();
        });
        
        this.adminCancel.addEventListener('click', function(){ //hides the admin display without saving any new cat data.
            octopus.adminCancel();
        });
        
        this.adminSave.addEventListener('click', function(){ //hides the admin display and saves new cat data.
            octopus.adminSave();
        });
        
        this.render();
    },
    
    render: function(){
        var currentCat = octopus.getCurrentCat(); //calls current cat
        this.adminName.value = currentCat.name;
        this.adminURL.value = currentCat.imgSrc;
        this.adminClicks.value = currentCat.clickCount;
    },
    
    show: function(){
        this.adminArea.style.display = 'block'; //shows the admin div on index.html
        },
        
    hide: function(){
        this.adminArea.style.display = 'none';
    }

};






















