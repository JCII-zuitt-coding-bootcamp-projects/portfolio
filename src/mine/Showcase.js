import React, {useState , useEffect} from 'react'

/*Bulma components*/
import { Hero , Columns ,Container , Image} from 'react-bulma-components';

const Showcase = ()=>{


	const original = [1,2,3,4,5,6,7,8,9,10]; // original characters
	let selected_index = []; // must be two element only.. 0 - the first selected and 1 - the second selected.. if same make the index in the characters = 0 for displaying non(means destroyed na..).. 
	// let level = 1;
	const [charsInPlay , setCharsInPlay ] = useState( 2 )
	const [characters , setCharacters ] = useState( getCharactersToPlay(charsInPlay) )
	
	useEffect(() => {

		// if(charsInPlay == 1)
		// return;

	    let remaining = characters.find( character =>  character != 0 ); // find if their is still remaining characters unlocked
	    
	    if(!remaining){ // if remaining is undefined...
	    	// alert("meron")
	    	console.log("================ winner!" , charsInPlay);
	    	setCharsInPlay(charsInPlay + 1) // level up!
	    	setCharacters(getCharactersToPlay(charsInPlay)) // get new character
	    }


	  });

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}


	//get the six character to play... 
	function getCharactersToPlay(charCount = 2){
		// charCount = charCount == 1 ? 2 : charCount;

		let randCharacters = []
		// Picking the character from 10 to 6 only and multiply by 2 and shuffle the 12 chars
		randCharacters = [...original]; // copy array from orig chars... not reference
		randCharacters = shuffle(randCharacters); // shuffle first the 10 origs copy..
		randCharacters = randCharacters.slice(0, charCount); //get only 6 elements
		randCharacters = [...randCharacters , ...randCharacters]; //create 2 copy of 6 character = 12 to shuffle again
		randCharacters = shuffle(randCharacters);

		return randCharacters;
	}



	// a character is selected
	function charIsClicked(index){


		if(selected_index.length == 0){
			//add the first selected in "selected_index" index 0 | 1 selected
			selected_index.push(index);
		}else if(selected_index.length == 1){

			if(selected_index[0] == index)
				return; // if the 1st selected is same with the second selected.. return agad

			//add the 2nd selected in "selected_index" index 1 | 2 selected , 
			selected_index.push(index);
			//Compare now the 0 and 1 index value if the same, if same, pass the 0 to the two index as a value
			// console.log("2 vals!" , selected_index )

			// compare the two selected
			// alert(selected_index);
			if( characters[selected_index[0]] == characters[selected_index[1]] ){
				console.log("the same characters!")
				let newChars = [...characters] // get copy of the characters state
				newChars[selected_index[0]] = 0; // 0 means natangal na
				newChars[selected_index[1]] = 0; // 0 means natangal na
				//set new characters
				setCharacters(newChars);

				
			}else{
				console.log("NOT the same characters!")

			}

			selected_index = [];

			
		}
	}


	

	




	return (

		<Hero.Body>

		   <div style={{ backgroundColor: 'transparent', width : '400px' , margin: '0 auto' }}>
		   <Container>

		   <article className="message is-warning">
			  <div className="message-header has-text-centered">
			    SpongeBob Pairing Game  Level { charsInPlay - 1 }
			  </div>
			  <div className="message-body">

				<Columns className="is-mobile">
		   			{
		   				characters.map( (e , i)=>{

		   					if(e != 0 ){
		   						return (
		   							<Columns.Column size={3} key={i}>
		   								<center>
						   				<img 
						   					src={`/assets/sb-characters/${e}.jpg`} 
						   					style={{ height : '60px'}}
						   					className="animated pulse infinite"
						   					onClick={ event => {
						   						charIsClicked(i)
						   					}}
						   				/>
		   								</center>
						   				
						   			</Columns.Column>
		   						);
		   					}else{
		   						//if 0 the value... 0 means natangal na...
		   						return (
		   							<Columns.Column size={3} key={i}>
		   								<div style={{ height : '60px'}}>
		   								</div>
						   			</Columns.Column>
		   						);
		   					}
		   					
		   				})
		   			}
		   			

		   		</Columns>

			  </div>
			</article>
		   		
		   </Container>
		   </div>

		</Hero.Body>

		);
}


export default Showcase;
