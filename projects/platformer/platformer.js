$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
 
    createPlatform(200, 625, 100, 15);
    createPlatform(1000, 625, 200, 15);
    createPlatform(490, 400, 370, 15);
    createPlatform(350, 525, 140, 15);
    createPlatform(850, 525, 100, 15);
    createPlatform(0, 275, 140, 15);
    createPlatform(0, 500, 120, 15);
    createPlatform(1000, 275, 400, 20);
    createPlatform(1390, 0, 10, 800);
    createPlatform(120, 470, 10, 45);
    createPlatform(200, 0, 10, 400)
    createPlatform(350, 100, 10, 500);
    createPlatform(325, 500, 25, 10);
    createPlatform(200, 400, 25, 10);
    createPlatform(325, 300, 25, 10);
    createPlatform(200, 225, 25, 10);
    createPlatform(490, 0, 10, 400);
    createPlatform(550, 625, 300, 15);
    createPlatform(450, 675, 100, 15);
    createPlatform(450, 625, 10, 50);
    createPlatform(350, 625, 100, 15);
    createPlatform(350, 600, 10, 25);
    createPlatform(625, 575, 10, 50);
    createPlatform(700, 575, 10, 50);
    createPlatform(775, 575, 10, 50);
    createPlatform(850, 400, 10, 125);
    createPlatform(850, 625, 10, 75);
    createPlatform(850, 700, 150, 15);
    createPlatform(1000, 625, 10, 90);
    createPlatform(1200, 525, 100, 15)
    createPlatform(950, 395, 10, 145);
    createPlatform(1350, 450, 50, 10);
    createPlatform(950, 390, 300, 15);
    createPlatform(775, 350, 10, 50);
    createPlatform(700, 300, 10, 100);
    createPlatform(625, 250, 10, 150);
    createPlatform(625, 325, 25, 10);
    createPlatform(575, 250, 50, 15);
    createPlatform(500, 325, 25, 10);
    createPlatform(500, 175, 25, 10);
    createPlatform(575, 125, 300, 10);
    


    

    


    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("gumgum", 205, 300, 20, 0.5);
    createCollectable("enma", 50, 300, 1, 1);
    createCollectable("thousandsunny", 1300, 50, 10, 0.1);



    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("left", 600, 1000);
    createCannon("bottom", 275, 2000);
    createCannon("top", 300, 3000);
    createCannon("top", 525, 3500);
    createCannon("top", 725, 1500);
    createCannon("top", 800, 2250);
    createCannon("right", 375, 5500);
    createCannon("bottom", 1320, 2500);
    createCannon("top", 970, 3500);
    createCannon("bottom", 100, 2000)



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
