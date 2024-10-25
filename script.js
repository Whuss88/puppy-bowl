// console.log(`welcome to the thunder dome`)
// state for storage
let state = {
  players:[]
};
// fetch data and update state
const fetchData = async () => {
  try {
      // Fetch data from the specified URL
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players');
      // Make the data readable with json()
      const responseJson = await response.json();
      // update players array in state
      state.players = responseJson.data.players;
      // run displayplayers function with state passed thru
      displayPlayers(state.players)
  // if all that doesnt work show error
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};
// create displayPlayers funtion
const displayPlayers = (players) => {
//     // Create list
  const playerList = document.createElement('ul');
  // map out array for players and display as li
  const playersArr = players.map(player => `<li>${player.name}</li>`);
//     // Put readable data into new listItem
  playerList.innerHTML =`<h2>Player List</h2> ${playersArr.join(``)}`;
//     // Grab main from html
  const main = document.querySelector('main');
  main.innerHTML = ''; // Clear main
//     // Put newList into main
  main.append(playerList);
  addClickEventToPlayers();
};

// create function to add clickevent
const addClickEventToPlayers = () => {
// grab the players 
  const players = document.querySelectorAll(`li`);
// for each li
  players.forEach(player => {
    // add event listener of click
    player.addEventListener(`click`, (event) => {
    // define playername
    const playerName = event.target.innerHTML;
    // select player that was clicked 
    const selectedPlayer = state.players.find(p => p.name === playerName);
    // run function to display selected player
    displayPlayerDetails(selectedPlayer);
    });
  });
};

// create function to displayPlayerDetails
const displayPlayerDetails = (player) => {
  // grab main 
  const main = document.querySelector(`main`);
  console.log(player.imageUrl)
  // fill main contents with details
  main.innerHTML = `
    <button id="back-button">Back</button>
    <h2>${player.name}</h2>
    <img src="${player.imageUrl}" alt="${player.name}'s picture"/>
    <h3>ID</h3>
      <p>${player.id}</p>
    <h3>Breed</h3>
      <p>${player.breed}</p>
    <h3>Status</h3>
      <p>${player.status}</p>
    `;
    // / grab button 
  const backButton = document.querySelector(`#back-button`);
  // create add event listener for back button
  backButton.addEventListener(`click`, (event) => {
    // button will take user back to all list of players
    displayPlayers(state.players);
  });
};  
// initialize the application
const renderPlayer = async () => {
  await fetchData();
};

renderPlayer();