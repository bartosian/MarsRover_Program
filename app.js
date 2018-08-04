// Rover Object Goes Here
// ======================

let rovers = [
    {
        name: "R1",
        direction: "N",
        x: 0,
        y: 0,
        travelLog: [],
        GridWarning: false
    },
    {
        name: "R2",
        direction: "S",
        x: 8,
        y: 2,
        travelLog: [],
        GridWarning: false
    },
    {
        name: "R3",
        direction: "W",
        x: 2,
        y: 4,
        travelLog: [],
        GridWarning: false
    }
];


const grid = [
    ['R1','','','','X','','','','','',''],
    ['','','X','','','','','','','',''],
    ['','','','','','','X','','R2','',''],
    ['','','','','','','','','X','',''],
    ['','','R3','','X','','','','','',''],
    ['','','','','X','','','','','',''],
    ['','','','','','','','','X','',''],
    ['','','X','','','','','','','',''],
    ['','','','','','','','','X','',''],
    ['','','','','','X','','','','','']
];

// ======================
function turnLeft(rover){
    console.log("turnLeft was called!");

  let currentDirection = rover.direction;

  switch(currentDirection) {

      case "N":
        rover.direction = "W";
        console.log("direction was changed on West!");
        break;

      case "S":
        rover.direction = "E";
        console.log("direction was changed on East!");
        break;

      case "W":
        rover.direction = "S";
        console.log("direction was changed on South!");
        break;

      case "E":
        rover.direction = "N";
        console.log("direction was changed on North!");
        break;
  }

}

function turnRight(rover){
  console.log("turnRight was called!");

    let currentDirection = rover.direction;

    switch(currentDirection) {

        case "N":
            rover.direction = "E";
            console.log("direction was changed on East!");
            break;

        case "S":
            rover.direction = "W";
            console.log("direction was changed on West!");
            break;

        case "W":
            rover.direction = "N";
            console.log("direction was changed on North!");
            break;

        case "E":
            rover.direction = "S";
            console.log("direction was changed on South!");
            break;
    }
}

function moveForward(rover){
  console.log("moveForward was called");

    let currentDirection = rover.direction;

    switch(currentDirection) {

        case "N":
          if(rover.y === 0) {
            console.log("rover can't  move forward in the direction of the North, due to being on the border of the grid of motion!");
            rover.GridWarning = true;
            break;
          } else if(grid[rover.y - 1][rover.x] === 'X') {
              console.log("rover can't move forward. There is an obstacle on the way!");
              rover.GridWarning = true;
              break;
          } else if(grid[rover.y - 1][rover.x] !== '') {
              console.log("rover can't move forward. There is another rover on the way!");
              rover.GridWarning = true;
              break;
          }
            grid[rover.y][rover.x] = '';
            rover.y -= 1;
            grid[rover.y][rover.x] = rover.name;
            console.log(`current rover's position is 'X: ${ rover.x }, Y: ${ rover.y }'!`);
            break;
        case "S":
           if(rover.y === 9) {
             console.log("rover can't  move forward in the direction of the South, due to being on the border of the grid of motion!");
             rover.GridWarning = true;
             break;
           } else if(grid[rover.y + 1][rover.x] === 'X') {
               console.log("rover can't move forward. There is an obstacle on the way!");
               rover.GridWarning = true;
               break;
           } else if(grid[rover.y + 1][rover.x] !== '') {
               console.log("rover can't move forward. There is another rover on the way!");
               rover.GridWarning = true;
               break;
           }
            grid[rover.y][rover.x] = '';
            rover.y += 1;
            grid[rover.y][rover.x] = rover.name;
            console.log(`current rover's position is 'X: ${ rover.x }, Y: ${ rover.y }'!`);
            break;

        case "W":
            if(rover.x === 0) {
              console.log("rover can't  move forward in the direction of the West, due to being on the border of the grid of motion!");
              rover.GridWarning = true;
              break;
            } else if(grid[rover.y][rover.x - 1] === 'X') {
                console.log("rover can't move forward. There is an obstacle on the way!");
                rover.GridWarning = true;
                break;
            } else if(grid[rover.y][rover.x - 1] !== '') {
                console.log("rover can't move forward. There is another rover on the way!");
                rover.GridWarning = true;
                break;
            }
            grid[rover.y][rover.x] = '';
            rover.x -= 1;
            grid[rover.y][rover.x] = rover.name;
            console.log(`current rover's position is 'X: ${ rover.x }, Y: ${ rover.y }'!`);
            break;

        case "E":
            if(rover.x === 9) {
              console.log("rover can't  move forward in the direction of the East, due to being on the border of the grid of motion!");
              rover.GridWarning = true;
              break;
            } else if(grid[rover.y][rover.x + 1] === 'X') {
                console.log("rover can't move forward. There is an obstacle on the way!");
                rover.GridWarning = true;
                break;
            } else if(grid[rover.y][rover.x + 1] !== '') {
                console.log("rover can't move forward. There is another rover on the way!");
                rover.GridWarning = true;
                break;
            }
            grid[rover.y][rover.x] = '';
            rover.x += 1;
            grid[rover.y][rover.x] = rover.name;
            rover.x += 1;
            console.log(`current rover's position is 'X: ${ rover.x }, Y: ${ rover.y }'!`);
            break;
    }

}

function moveBackward(rover){
    console.log("moveBackward was called");

    let currentDirection = rover.direction;

    switch(currentDirection) {

        case "N":
            if(rover.y === 9) {
                console.log("rover can't  move backward in the direction of the South, due to being on the border of the grid of motion!");
                rover.GridWarning = true;
                break;
            } else if(grid[rover.y + 1][rover.x] === 'X') {
                console.log("rover can't move backward. There is an obstacle on the way!");
                rover.GridWarning = true;
                break;
            } else if(grid[rover.y + 1][rover.x] !== '') {
                console.log("rover can't move backward. There is another rover on the way!");
                rover.GridWarning = true;
                break;
            }
            grid[rover.y][rover.x] = '';
            rover.y += 1;
            grid[rover.y][rover.x] = rover.name;
            console.log(`current rover's position is 'X: ${ rover.x }, Y: ${ rover.y }'!`);
            break;

        case "S":
            if(rover.y === 0) {
                console.log("rover can't  move backward in the direction of the North, due to being on the border of the grid of motion!");
                rover.GridWarning = true;
                break;
            } else if(grid[rover.y - 1][rover.x] === 'X') {
                console.log("rover can't move backward. There is an obstacle on the way!");
                rover.GridWarning = true;
                break;
            } else if(grid[rover.y - 1][rover.x] !== '') {
                console.log("rover can't move backward. There is another rover on the way!");
                rover.GridWarning = true;
                break;
            }
            grid[rover.y][rover.x] = '';
            rover.y -= 1;
            grid[rover.y][rover.x] = rover.name;
            console.log(`current rover's position is 'X: ${ rover.x }, Y: ${ rover.y }'!`);
            break;

        case "W":
            if(rover.x === 9) {
                console.log("rover can't  move backward in the direction of the East, due to being on the border of the grid of motion!");
                rover.GridWarning = true;
                break;
            } else if(grid[rover.y][rover.x + 1] === 'X') {
                console.log("rover can't move backward. There is an obstacle on the way!");
                rover.GridWarning = true;
                break;
            } else if(grid[rover.y][rover.x + 1] !== '') {
                console.log("rover can't move backward. There is another rover on the way!");
                rover.GridWarning = true;
                break;
            }
            grid[rover.y][rover.x] = '';
            rover.x += 1;
            grid[rover.y][rover.x] = rover.name;
            console.log(`current rover's position is 'X: ${ rover.x }, Y: ${ rover.y }'!`);
            break;

        case "E":
            if(rover.x === 0) {
                console.log("rover can't  move backward in the direction of the West, due to being on the border of the grid of motion!");
                rover.GridWarning = true;
                break;
            } else if(grid[rover.y][rover.x - 1] === 'X') {
                console.log("rover can't move backward. There is an obstacle on the way!");
                rover.GridWarning = true;
                break;
            } else if(grid[rover.y][rover.x - 1] !== '') {
                console.log("rover can't move backward. There is another rover on the way!");
                rover.GridWarning = true;
                break;
            }
            grid[rover.y][rover.x] = '';
            rover.x -= 1;
            grid[rover.y][rover.x] = rover.name;
            console.log(`current rover's position is 'X: ${ rover.x }, Y: ${ rover.y }'!`);
            break;
    }

}

function manageRover(commandsList, rover) {
  let commands = commandsList.toLowerCase().split('');

  let actions = {
    f: moveForward,
    l: turnLeft,
    r: turnRight,
    b: moveBackward
  };

  for(let i = 0; i < commands.length; i++) {
      rover.GridWarning = false;

    if(actions[commands[i]] === undefined) {
      continue;
    }
    actions[commands[i]](rover);

    if((commands[i] == 'f' || commands[i] == 'b') && !rover.GridWarning) {
        rover.travelLog.push(`( X:${ rover.x }, Y:${ rover.y } )`);
    }

  }

  if(!rover.travelLog.length) {
    console.log("Rover remained on it's  place!");
    return;
  }
  console.log(`Rover had the following route: ${ rover.travelLog }`);

}





