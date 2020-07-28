// Takes command line arguments as input and beeps alarm accordingly

const alarm = function (arr) {
  arr = arr.sort();
  for (const element of arr) {
    let item = parseInt(element); 
        
    if (item > 0 && !isNaN(item)) {  // Beep alarm with an interval only if the array item is a number and > 0
      let delay = 1000 * item;
      setTimeout (() => {
        process.stdout.write('\x07'); // Triggers a beep sound
        //process.stdout.write('A\n'); // Use if the beep does not work
      }, delay);   
    }    
  }
};

const arr = process.argv.slice(2); // Takes command line arguments as input

alarm (arr); // Calling the function


