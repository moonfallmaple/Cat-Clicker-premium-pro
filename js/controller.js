

/* ======= Octopus ======= */

let octopus = {
    //init function initalizes with the begining data. Keep out of the DOM.
    init: function(){
        //set the current cat to the first one on the list
        model.currentCat = model.cats[0];
        
        //tell our views to initialize.
        catListView.init();
        catView.init();
        adminView.init();
        adminView.hide();
    },
    
    getCurrentCat: function(){
        return model.currentCat;
    },
    
    //calls the array of cats.
    getCats: function(){
        return model.cats;
    },
    
    //sets the new cat.
    setCurrentCat: function(cat){
        model.currentCat = cat;
    },
    
    //increments the counter for the currently-selected cat.
    incrementCounter: function(){
        model.currentCat.clickCount ++;
        catView.render();
    },
    //function runs when 'Admin' button is clicked.
    adminDisplay: function(){
        if (model.adminShow === false) {
            model.adminShow = true;
            adminView.show(); //displays the admin input boxes and buttons
        }
        else if (model.adminShow === true) {
            model.adminShow = false;
            adminView.hide();// hides the admin input boxes and buttons
        }
    },
    
    //hides admin display when cancel button is clicked.
    adminCancel: function(){
        adminView.hide();
    },
    
    //hides admin display and saves new cat data when save button is clicked.
    adminSave: function(){
        model.currentCat.name= adminView.adminName.value;
        model.currentCat.imgSrc= adminView.adminURL.value;
        model.currentCat.clickCount= adminView.adminClicks.value;
        catView.render();
        catListView.render();
        adminView.hide();
    }
};
//make it go!
octopus.init();