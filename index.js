//1
const countToFifty = () => {
    for(let i = 1; i < 51; i++) {
        console.log(i);
    }
}

//2

const countFromOne = (int) => {
    for(let i = 1; i < int + 1; i++) {
        console.log(i);
    }
    
}
  


//3
const threeAndFiveInFifty = () => {
    for(let i = 1; i < 51; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

//4

const threeOrFive = (int) => {
      for(let i = 1; i < int + 1; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
    
}
//5

const triple = array => {
    let tripledArray = [];
    for(let i = 0; i < array.length; i++) {
        let tripledValue = array[i] * 3;
        
        tripledArray.push(tripledValue);
    } return tripledArray; 
}



countToFifty(); 
countFromOne(25)

threeAndFiveInFifty()

threeOrFive(15);

console.log(triple([1, 2, 3]));