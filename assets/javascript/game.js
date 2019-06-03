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
var numberRemaining=document.getElementById("numberremaining");
var letters=document.getElementById("letters");
letters.textContent = " ";
var animal=animals[animalindex];
var guessedWord="";
wins.textContent = 0;
var isNewAnimal = true;

function reaplceChartAtPos(ori, index, replacement) {
    return ori.substr(0, index) + replacement+ ori.substr(index + replacement.length);
}

            document.onkeyup = function(event){
                if(isNewAnimal)
                {
                    if (animalindex === animals.length) {
                        animalindex=0;
                    }
                    guessedWord="";
                    animal=animals[animalindex];
                    currentWord.textContent="";
                    for(var i=0;i<animal.length;i++)
                    {
                        
                        guessedWord+="_";
                    }
                    for(i=0;i<guessedWord.length;i++)
                    {

                        currentWord.textContent+=(guessedWord[i]+" ");
                    }
                    isNewAnimal = false;
                }
                numberRemaining.textContent-=1;
              
                var userInput=event.key;
                
                currentWord.textContent="";
                for (var i = 0; i < animal.length; i++) 
                {
                    
                    if(userInput===animal[i]){
                        guessedWord = reaplceChartAtPos(guessedWord, i,animal[i]);
                    }  
                    currentWord.textContent+=(guessedWord[i]+" ");
                }

                var isNewLetter=true;
                for(var i=0;i<letters.textContent.length;i++)
                {
                    if(letters.textContent[i]===userInput)
                    isNewLetter=false;
                }
                if(isNewLetter)
                {
                    letters.textContent+=userInput+"  ";
                }

                if(guessedWord===animal)
                {
                    animalindex++;
                    isNewAnimal =true;
                    wins.textContent=parseInt(wins.textContent) + 1;
                    numberRemaining.textContent=12;
                    currentWord.textContent="_ _ _ _ _ _ _";
                    letters.textContent="";
                }
                else if(parseInt(numberRemaining.textContent)===0){
                    alert("You loss");
                    animalindex++;
                    isNewAnimal =true;
                    numberRemaining.textContent=12;
                    currentWord.textContent="_ _ _ _ _ _ _";
                    letters.textContent="";
                }
                           
                
                
            }
    
    