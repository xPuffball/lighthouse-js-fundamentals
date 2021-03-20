const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(arr){
  let suitable = []
  for(locData of arr){
    if(locData[1] >= 20 && (locData[2] === "school" || locData[2] === "community centre")){
      suitable += locData[0];
    }
  }
  return suitable
}

console.log(chooseStations(stations))