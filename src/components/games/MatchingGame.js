import React, {useState , useEffect ,useRef} from 'react'

import "./MatchingGame.css";
/*Bulma components*/
import { Hero , Columns ,Container , Image} from 'react-bulma-components';

import { Howl, Howler } from "howler";

const MatchingGame = ()=>{

	const gameHolder = useRef(null)
	
	const cardClickSound =  new Howl({
		src: ["/assets/sfx/boink.mp3"],
	})

	const correctMatchSound = new Howl({
		src: ["/assets/sfx/correct_match.mp3"],
	});

	const wrongMatchSound = new Howl({
		src: ["/assets/sfx/card_sound.mp3"],
	});

	const newLevelSound = new Howl({
		src: ["/assets/sfx/new_level.mp3"],
	});

	const gameAmbiance = new Howl({
		src: [
		"/assets/sfx/spongebob_ambiance_2.mp3",
		// "/assets/sfx/spongebob_ambiance_1.mp3",
		],
		volume: 0.2,
		// autoplay: true,
		loop: true,
	});






	// original characters
	const original = [1,2,3,4,5,6,7,8,9,10]; 

	// exit classes
	let exitsClass = [
    "bounceOut",
    "bounceOutDown",
    "bounceOutLeft",
    "bounceOutRight",
    "bounceOutUp",
    "fadeOut",
    "fadeOutDown",
    "fadeOutDownBig",
    "fadeOutLeft",
    "fadeOutLeftBig",
    "fadeOutRight",
    "fadeOutRightBig",
    "fadeOutUp",
    "fadeOutUpBig",
  ];

	// flag of clicked character
	// must be two element only.. 0 - the first selected and 1 - the second selected.. if same make the index in the characters = 0 for displaying non(means destroyed na..).. 
	// let selected = [];
	let [ selected, setSelected] = useState([]);

	// console.log(selected instanceof Array);
	//level , 1 level is 1 character to play with
	let [level , setLevel ] = useState( 1 )

	//Characters in play
	const [characters , setCharacters ] = useState( getDoubledCharacters(level) )
	
  	// //componentDidMount
  	// useEffect(() => {
		
	
	// }, [])

	useEffect(() => {
		gameAmbiance.stop();
		gameAmbiance.play();

		return () => {
			// stop sounds when going to other component
			gameAmbiance.stop();
			// console.log("will unmount");
		};
		
	}, [])

	useEffect(() => {
		// console.log("new Updated")
		// if(charsInPlay == 1)
		// return;

		// find if their is still remaining characters unlocked
	    let remaining = characters.find( character =>  character !== 0 ); 
		
		// if remaining is undefined.
	    if(!remaining){ 
			
			setLevel((prevLevel)=>{
				return prevLevel + 1;
			}) // level up!

			
			
			 // get new character
			setCharacters(getDoubledCharacters(level))
			setSelected([]);
			gameHolderReEnter();
		}

	  },[characters]);



	  useEffect( () => {
		// alert(level);
		// console.log("================ Level Up!");
	  },[level])





	  //selected character reactivity

	  useEffect(() => {
      //check if the 2 selected is same
      if (selected.length === 2) {
        // console.log("22xss" , selected);

        //Compare now the 0 and 1 index value if the same, if same, pass the 0 to the two index as a value
        // console.log("2 vals!" , selected_index )

        // compare the two selected
        // alert(selected_index);
		// console.log(selected);
		
        if (characters[selected[0]] === characters[selected[1]]) {
        //   console.log("Matched!");

          //set new characters
          // setCharacters(newChars);

          setCharacters((prevCharacters) => {
            let newChars = [...prevCharacters]; // get copy of the characters state
            newChars[selected[0]] = 0; // 0 means removed na
            newChars[selected[1]] = 0; // 0 means removed na

            return [...newChars];
		  });

		  setSelected([]);
		  correctMatchSound.play();

        } else {
			//   console.log("NOT the same characters!");

			// reset flag
			// selected = [];
			// delay 2 seconds before hiding again...
			setTimeout(() => {
				setSelected([]);
				wrongMatchSound.play();
			}, 1000);
			
        }

        
      }
    }, [selected]);



	function gameHolderReEnter(){
		newLevelSound.play();
		let prevClasses = gameHolder.current.className;
		
		const exitClass = exitsClass[Math.floor(Math.random() * exitsClass.length)];
		
		gameHolder.current.className = "message is-warning animated " + exitClass;//"is-invisible"; // is-invisible from bulma
		setTimeout(() => {
			gameHolder.current.className = prevClasses;
		}, 1000);
	}


	// Picking the character from 10 to [level * 1 char] only and multiply by 2 and shuffle the 12 chars
	function getDoubledCharacters(charCount = 2){
		
		// alert(" getDoubledCharacters : " + charCount);
		// charCount = charCount <= 4 ? 4 : charCount;

		charCount++;

		let randCharacters = []

		randCharacters = [...original]; // copy array from orig chars... not reference
		randCharacters = shuffle(randCharacters); // shuffle first the 10 origs copy..
		randCharacters = randCharacters.slice(0, charCount); //get only [charCount] elements

		let randDoubledCharacters = [...randCharacters , ...randCharacters]; //create 2 copies for each character
		randDoubledCharacters = shuffle(randDoubledCharacters); // shuffle again before returning 

		return randDoubledCharacters;
	}


	// For shuffling
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


	



	// a character is selected
	function charIsClicked(index){

		
		// console.log(index)

		if(selected.length === 0){

			// First character is selected
			setSelected((prevState) => {
				prevState.push(index);
				return [...prevState];
			});
			cardClickSound.play();

		}else if(selected.length === 1){

			//  Second character is selected
			
			// if the 1st selected index is same with the second selected index.. return
			if(selected[0] === index)
				return;

			//2nd selected index is not the same with the first selected index
			setSelected((prevState) => {
        		prevState.push(index);
				return [...prevState];
			});
			cardClickSound.play();

		}
	}


	

	




	return (

		<Hero.Body>

		   <div style={{ backgroundColor: 'transparent', width : '400px' , margin: '0 auto' }}>
		   <Container>

		   <article className="message is-warning animated bounceInDown" ref={gameHolder}>
			  <div className="message-header has-text-centered">
			    SpongeBob Matching Game Level { level }
				{/* /10 */}
			  </div>
			  <div className="message-body">

				<Columns className="is-mobile">
		   			{
		   				characters.map( (img , index)=>{

		   					if(img !== 0 ){
		   						return (
		   							<Columns.Column size={3} key={index}>
		   								<center>
						   				<img 
						   					src={`/assets/sb-characters/${ selected.indexOf(index) === -1 ? 'hidden' : img }.jpg`} 
											alt='img'   
						   					className="animated pulse infinite spongebob-char"   
						   					onClick={ event => {
						   						charIsClicked(index)
						   					}}
						   				/>
		   								</center>
						   				
						   			</Columns.Column>
		   						);
		   					}else{
		   						//if 0 the value... 0 means natangal na...
		   						return (
		   							<Columns.Column size={3} key={index}>
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


export default MatchingGame;
