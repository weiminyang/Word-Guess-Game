var animals=[
    "rabbit",
    "dog",
    "cat",
    "frog",
    "duck",
    "wolf"

];
var animalindex=0;
var wordindex=0;
var currentWord=document.getElementById("currentword");
var wins=document.getElementById("wins");
var animal=animals[animalindex];
wins = 0;




            document.onkeyup = function(event){
                if(currentWord.textContent!==animal)
                {
                    animal=animals[animalindex];
                    currentWord.textContent=" ";
                    for(i=0;i<animal.length;i++)
                    {
                        currentWord.textContent+="_ ";
                    }

                }
                else{

                }
                var userInput=event.key;
                for (let i = 0; i < animal.length; i++) 
                {
                    letter=animal[i];
                    if(userInput===letter)
                    {
                      currentWord.textContent[i]=letter+" ";
                    }
                }
                if(currentWord.textContent===animal)
                {
                    animalindex++;


                }
                           
                
                console.log(currentWord.textContent);
                                          
            }
    
    