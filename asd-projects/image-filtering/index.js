// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
  applyFilter(reddify);
  applyFilterNoBackground(increaseGreenByBlue);
  applyFilterNoBackground(reddify);
  applyFilter(decreaseBlue);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (i = 0; i < image.length; i++) {
    for (j = 0; j < image[i].length; j++) {
      var pixel = image[i][j];
      var pixelArray = rgbStringToArray(pixel);
      //This is where I'll modify the color values later
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
    }
  }
}


// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor= image[0][0];
  for (i = 0; i < image.length; i++) {
    for (j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        var pixelArray = rgbStringToArray(image[i][j]);
        filterFunction(pixelArray);
        var updatedPixel = rgbArrayToString(pixelArray);
        image[i][j] = updatedPixel;
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
//Will keep the color values between 0 and 255
function keepInBounds(numValue) {
  if (numValue < 0) {
    return 0;
  }
  else if (numValue > 255) {
    return 255;
  }
  else {
    return numValue;
  }
}

// TODO 4: Create reddify filter function
function reddify(array) {
  array[RED] = 200;
}

// TODO 7 & 8: Create more filter functions
//creates a filter which decreases blue color
function decreaseBlue(array) {
  array[BLUE] -= 50;
  array[BLUE] = keepInBounds(array[BLUE]);
}

function increaseGreenByBlue(array) {
  array[GREEN] += array[BLUE];
  array[GREEN] = keepInBounds(array[GREEN]);
}

// CHALLENGE code goes below here
