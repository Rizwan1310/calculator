// Function to append numbers and operators to the result input
function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  // Function to calculate the result
  function calculateResult() {
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  }

  // function to clear result
  function clearResult(){
    document.getElementById("result").value=""
  }

  