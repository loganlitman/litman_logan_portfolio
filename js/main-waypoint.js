window.onload = function(){
    console.log("Hello world");


    ///////////////////INDEX PAGE/////////////////////
    //ANIMATED SVG
    var waypoint = new Waypoint({
        element:document.getElementById("ICONS"),
        handler:function(direction){
            this.element.classList.add("fadeInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "60%" //scroll to 50% for it to be activated
    })

    var waypoint = new Waypoint({
        element:document.getElementById("skills-text"),
        handler:function(direction){
            this.element.classList.add("fadeInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "60%" //scroll to 50% for it to be activated
    })

    //OTHER TEXT ON THE MAIN PAGE

    var waypoint = new Waypoint({
        element:document.getElementById("app"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "60%" //scroll to 50% for it to be activated
    })

    var waypoint = new Waypoint({
        element:document.getElementById("im-logan"),
        handler:function(direction){
            this.element.classList.add("fadeInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "60%" //scroll to 50% for it to be activated
    })

    var waypoint = new Waypoint({
        element:document.getElementById("about"),
        handler:function(direction){
            this.element.classList.add("fadeInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" //scroll to 50% for it to be activated
    })

    var waypoint = new Waypoint({
        element:document.getElementById("about-text"),
        handler:function(direction){
            this.element.classList.add("fadeInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "60%" //scroll to 50% for it to be activated
    })


  };