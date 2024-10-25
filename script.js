// console.log(`welcome to the thunder dome`)

const fetchData = async () => {
  try {
      // Fetch data from the specified URL
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players');
      // Make the data readable with json()
      const responseJson = await response.json();
      // console.log(responseJson.data.players)
      const allPlayers = responseJson.data.players
      console.log(allPlayers)
      // Display the players
  //    
      const playersArr = allPlayers.map(player => `<li>${player.name}</li>`)
      console.log(playersArr)
  //     // Create actual list
      const playerList = document.createElement('ul');
  //     // Put readable data into new listItem
      playerList.innerHTML = playersArr.join(``);
      console.log(playerList);
  //     // Grab main from html
      const main = document.querySelector('main');
  //     // Put newList into main
      main.innerHTML = ''; // Clear main
      main.append(playerList);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Call the async function
fetchData();

// style when done 
// make new branch
// create async function??? to show indivial player data when clicked
// for each li
  // add event listener of click
  // to show each li's details(possible picture) + back button

  // grab button 
  // create add event listener for back button
    // button will take user back to all list of players
// end async function or regular function
// style individual pages

fetchData()