(() => {

    //rework this with a Vue instance
    
    const vm = new Vue({
        el : "#app",
    
        data : {
            message : "I'm a Creative Designer from Toronto, Ontario.",
            workpage : []
        },
    
        mounted : function(){
            console.log('vue is ready to go on the page');

            this.getData();
    
            //this.addPreloader(document.querySelector('.modelInfo'));
    
            //trigger an ajax call with a mocked click event
            //document.querySelector('#F55').click();
        },
    
        beforeUpdate : function () {
            console.log('things are gonna change...');
        },
    
        updated : function() {
            console.log('things are different now');
            //move the preloader out of the element and hide it (once its done loading!!!)
            //let preloader = document.querySelector('.preloader-wrapper');
    
            // hide the preloader with css
            //move it to the bottom of the page - ready for the next AJAX call
            //setTimeout(function(){
                //preloader.classList.add('hidden');
                //document.body.appendChild(preloader);
            //}, 1000); // 1000ms = 1second
        },
    
        methods : {
            addPreloader(parentEl) {
                //LOAD THE PRELOADER INTO THE PARENT ELEMENT AND MAKE IT DRAW
                let preloader = document.querySelector('.preloader-wrapper');
    
                parentEl.appendChild(preloader);
    
                let animItem = bodymovin.loadAnimation ({
                    wrapper : document.querySelector('.preloader'),
                    animType : 'svg',
                    loop : true,
                    path : 'data/search.json'          
                })
            },

            fetchMovieData(image) { 
                // this is a ternary statement (shorthand for if / else). left of the : is true, right is false 
                let url = movie ? `./includes/index.php?movie=${image}` : './includes/index.php';

                fetch(url)
                .then(res => res.json()) //the line that connects the json to a local project
                .then(data => {
                    console.log(data); 

                    if(image) {
                        this.singledata = data; //if we load the page one video comes up
                    } else {
                        this.videodata = data; //all the videos come up if we dont specify one
                    }
                })
                .catch(function(error) {
                    console.log(error); //making an error
                });
            },
    
            getData(e) {
                //trigger the preloader
                //this.addPreloader(document.querySelector('.modelInfo'));
                //let preloader = document.querySelector('.preloader-wrapper').classList.remove('hidden');
                //debugger;
                let targetURL = `./admin/connect.php?main=true`;
                 //gets the id of the element via the event object
                 fetch(targetURL) // go get the data and bring it back! good doggy
               .then(res => res.json()) //turn the result into a plain JS object
               .then(data => {
                   console.log(data);
                   //this.workpage=data[0];
                   data.forEach(row => {
                       this.workpage.push(row);
                   });
                    //const { modelName, pricing, modelDetails } = data[0];
                    //this.modelname = modelName;
                    //this.modeldetails = modelDetails;
                    //this.modelpricing = pricing;
    
                 }) 
                .catch(function(error) {
                console.log(error); //if anything broke, log it to the console
            });
            }
        }
    });
    

    
    })();
    
    