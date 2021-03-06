var arr = [
  {
    guest_type: 'crew',
    first_name: 'Marco',
    last_name: 'Burns',
    guest_booking: {
      room_no: 'A0073',
      some_array: [7, 2, 4],
    },
  },
  {
    guest_type: 'guest',
    first_name: 'John',
    last_name: 'Doe',
    guest_booking: {
      room_no: 'C73',
      some_array: [1, 3, 5, 2, 4, 3],
    },
  },
  {
    guest_type: 'guest',
    first_name: 'Jane',
    last_name: 'Doe',
    guest_booking: {
      room_no: 'C73',
      some_array: [1, 3, 5, 2, 4, 3],
    },
  },
  {
    guest_type: 'guest',
    first_name: 'Albert',
    last_name: 'Einstein',
    guest_booking: {
      room_no: 'B15',
      some_array: [2, 5, 6, 3],
    },
  },
  {
    guest_type: 'crew',
    first_name: 'Jack',
    last_name: 'Daniels',
    guest_booking: {
      room_no: 'B15',
      some_array: [2, 5, 6, 3],
    },
  },
  {
    guest_type: 'guest',
    first_name: 'Alan',
    last_name: 'Turing',
    guest_booking: {
      room_no: 'B15',
      some_array: [2, 5, 6, 3],
    },
  },
];

function mutateArray(a) {
  // Problem 1
  let returnArray  = flattenArray(a, []);
  
  // Problem 2 sum up some_array
  sumArray(returnArray);

  // Problem 3 filter on guest
  returnArray = returnArray.filter(element => element['guest_type'] === 'guest');

   // Problem 4 sort by name
   returnArray = returnArray.sort(
    (a, b) =>  {          
       if (a.last_name === b.last_name) {
          return a.first_name > b.first_name ? 1 : -1;
       }
       return a.last_name > b.last_name ? 1 : -1;
    });
  return returnArray;
}


function sumArray(returnArray){
  for(const element of returnArray){
    const tempArray = element["some_array"].reduce((a,b) => a + b);
    element["some_array"] = element["some_total"];
    element["some_total"] = tempArray;
  }
 }
 

function flattenArray(array, returnArray){
  const keyArray = getPairs(arr[0], [], true);
  for(const element of array){
    const obj ={};
    const valueArray = getPairs(element, [], false);
    for(let j = 0; j < valueArray.length; j++){
      obj[keyArray[j]] = valueArray[j];
    }
    returnArray.push(obj);
  }
  return returnArray;
}


function getPairs(arr, array, isKey){
  for(const key in arr){
    if(typeof(arr[key]) === 'object' && !Array.isArray(arr[key])){
      getPairs(arr[key], array, isKey)
    }else{
      if(isKey){
        array.push(key);
      }else{
        array.push(arr[key]);
      }
    }
  }
  return array;
}


$(document).ready(function () {
  $('#originalArray').html(JSON.stringify(arr, null, 2));
  $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
