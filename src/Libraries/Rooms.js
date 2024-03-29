class Room {
  constructor (roomAtt) {
    this.roomId = roomAtt.roomId
    this.option1Text = roomAtt.option1Text
    this.option2Text = roomAtt.option2Text
    this.option3Text = roomAtt.option3Text
    this.option4Text = roomAtt.option4Text
    this.roomNorth = roomAtt.roomNorth
    this.roomEast = roomAtt.roomEast
    this.roomWest = roomAtt.roomWest
    this.roomSouth = roomAtt.roomSouth
    this.treasurePresent = roomAtt.treasurePresent
    this.explored = false
    this.enemyPresent = roomAtt.enemyPresent
    this.mapId = roomAtt.mapId
    this.nextFloor = roomAtt.nextFloor
    this.previousFloor = roomAtt.previousFloor
    this.floor = roomAtt.floor
  }
  
  optionOne () {
    if (this.roomNorth != null) {
      document.getElementById(roomArr[player.room].mapId).style.border = null
      player.room = this.roomNorth
      roomText()
    }
    this.explored = true
    if (roomArr[player.room].enemyPresent != null) {
      combatStart()
    }
  }

  optionTwo () {
    if (this.roomSouth != null) {
      document.getElementById(roomArr[player.room].mapId).style.border = null
      player.room = this.roomSouth
      roomText()
    }
    this.explored = true
    if (roomArr[player.room].enemyPresent != null) {
      combatStart()
    }
  }

  optionThree () {
    if (this.roomEast != null) {
      document.getElementById(roomArr[player.room].mapId).style.border = null
      player.room = this.roomEast
      roomText()
    }
    this.explored = true
    if (roomArr[player.room].enemyPresent != null) {
      combatStart()
    }
  }

  optionFour () {
    if (this.roomWest != null) {
      document.getElementById(roomArr[player.room].mapId).style.border = null
      player.room = this.roomWest
      roomText()
    }
    this.explored = true
    if (roomArr[player.room].enemyPresent != null) {
      combatStart()
    }
  }

  roomInteract () {
    if (this.treasurePresent != null) {
      itemArr[this.treasurePresent].loot()
      this.treasurePresent = null
      roomText()
    } else if (this.nextFloor != null) {
      player.room = this.nextFloor
      nextFloor()
      roomText()
      this.explored = true

    } else if (this.previousFloor != null) {
      player.room = this.previousFloor
      nextFloor()
      roomText()
      this.explored = true

    }
  }
}
const startingRoom = new Room({
    roomId: 0,
    roomNorth: 1,
    roomWest: null,
    roomEast: null,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm68',
    nextFloor: null,
    floor: 1
  })
  startingRoom.explored = true
  const room1 = new Room({
    roomId: 1,
    roomNorth: 2,
    roomWest: null,
    roomEast: null,
    roomSouth: 0,
    treasurePresent: 0,
    enemyPresent: 0,
    mapId: 'rm58',
    nextFloor: null,
    floor: 1
  })
  const room2 = new Room({
    roomId: 2,
    roomNorth: 3,
    roomWest: null,
    roomEast: null,
    roomSouth: 1,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm48',
    nextFloor: null,
    floor: 1
  })
  const room3 = new Room({
    roomId: 3,
    roomNorth: null,
    roomWest: 4,
    roomEast: null,
    roomSouth: 2,
    treasurePresent: 0,
    enemyPresent: null,
    mapId: 'rm38',
    nextFloor: 10,
    floor: 1
  })
  const room4 = new Room({
    roomId: 4,
    roomNorth: null,
    roomWest: 5,
    roomEast: 3,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: 1,
    mapId: 'rm37',
    nextFloor: null,
    floor: 1
  })
  const room5 = new Room({
    roomId: 5,
    roomNorth: null,
    roomWest: null,
    roomEast: 4,
    roomSouth: 6,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm36',
    nextFloor: null,
    floor: 1
  })
  const room6 = new Room({
    roomId: 6,
    roomNorth: 5,
    roomWest: 7,
    roomEast: null,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm46',
    nextFloor: null,
    floor: 1
  })
  const room7 = new Room({
    roomId: 7,
    roomNorth: null,
    roomWest: null,
    roomEast: 6,
    roomSouth: 8,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm45',
    nextFloor: null,
    floor: 1
  })
  const room8 = new Room({
    roomId: 8,
    roomNorth: 7,
    roomWest: 9,
    roomEast: null,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55',
    nextFloor: null,
    floor: 1
  })
  const room9 = new Room({
    roomId: 9,
    roomNorth: null,
    roomWest: null,
    roomEast: 8,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm54',
    nextFloor: 10,
    floor: 1
  })
  const room10 = new Room({
    roomId: 10,
    roomNorth: 11,
    roomWest: null,
    roomEast: null,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm65',
    previousFloor: 9,
    floor: 2
  })
  const room11 = new Room({
    roomId: 11,
    roomNorth: 12,
    roomWest: null,
    roomEast: null,
    roomSouth: 10,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55',
    nextFloor: 25,
    floor: 2
  })
  const room12 = new Room({
    roomId: 12,
    roomNorth: null,
    roomWest: 19,
    roomEast: 13,
    roomSouth: 11,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm45',
    floor: 2
  })
  const room13 = new Room({
    roomId: 13,
    roomNorth: null,
    roomWest: 12,
    roomEast: 14,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm46',
    floor: 2
  })
  const room14 = new Room({
    roomId: 14,
    roomNorth: null,
    roomWest: 13,
    roomEast: 15,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm47',
    floor: 2
  })
  const room15 = new Room({
    roomId: 15,
    roomNorth: 16,
    roomWest: 14,
    roomEast: null,
    roomSouth: 18,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm48',
    floor: 2
  })
  const room16 = new Room({
    roomId: 16,
    roomNorth: 17,
    roomWest: null,
    roomEast: null,
    roomSouth: 15,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm38',
    floor: 2
  })
  const room17 = new Room({
    roomId: 17,
    roomNorth: null,
    roomWest: null,
    roomEast: null,
    roomSouth: 16,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm28',
    nextFloor: 25,
    floor: 2
  })
  const room18 = new Room({
    roomId: 18,
    roomNorth: 15,
    roomWest: null,
    roomEast: null,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm58',
    floor: 2
  })
  const room19 = new Room({
    roomId: 19,
    roomNorth: 20,
    roomWest: null,
    roomEast: 12,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm44',
    floor: 2
  })
  const room20 = new Room({
    roomId: 20,
    roomNorth: 21,
    roomWest: null,
    roomEast: null,
    roomSouth: 19,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm34',
    floor: 2
  })
  const room21 = new Room({
    roomId: 21,
    roomNorth: 22,
    roomWest: 23,
    roomEast: 24,
    roomSouth: 20,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm24',
    floor: 2
  })
  const room22 = new Room({
    roomId: 22,
    roomNorth: null,
    roomWest: null,
    roomEast: null,
    roomSouth: 21,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm14',
    floor: 2
  })
  const room23 = new Room({
    roomId: 23,
    roomNorth: null,
    roomWest: null,
    roomEast: 21,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm23',
    floor: 2
  })
  const room24 = new Room({
    roomId: 24,
    roomNorth: null,
    roomWest: 21,
    roomEast: null,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm25',
    floor: 2
  })
  const room25 = new Room({
    roomId: 25,
    roomNorth: 26,
    roomWest: null,
    roomEast: null,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm65',
    previousFloor: 17,
    floor: 3
  })
  const room26 = new Room({
    roomId: 26,
    roomNorth: 27,
    roomWest: 30,
    roomEast: 35,
    roomSouth: 25,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55',
    floor: 3
  })
  const room27 = new Room({
    roomId: 27,
    roomNorth: 28,
    roomWest: null,
    roomEast: null,
    roomSouth: 26,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm45',
    floor: 3
  })
  const room28 = new Room({
    roomId: 28,
    roomNorth: 29,
    roomWest: 34,
    roomEast: 39,
    roomSouth: 27,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm35',
    floor: 3
  })
  const room29 = new Room({
    roomId: 29,
    roomNorth: null,
    roomWest: null,
    roomEast: null,
    roomSouth: 28,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm25',
    floor: 3
  })
  const room30 = new Room({
    roomId: 30,
    roomNorth: null,
    roomWest: 31,
    roomEast: 26,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm54',
    floor: 3
  })
  const room31 = new Room({
    roomId: 31,
    roomNorth: 32,
    roomWest: null,
    roomEast: 30,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm53',
    floor: 3
  })
  const room32 = new Room({
    roomId: 32,
    roomNorth: 33,
    roomWest: null,
    roomEast: null,
    roomSouth: 31,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm43',
    floor: 3
  })
  const room33 = new Room({
    roomId: 33,
    roomNorth: null,
    roomWest: null,
    roomEast: 34,
    roomSouth: 32,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm33',
    floor: 3
  })
  const room34 = new Room({
    roomId: 34,
    roomNorth: null,
    roomWest: 33,
    roomEast: 28,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm34',
    floor: 3
  })
  const room35 = new Room({
    roomId: 35,
    roomNorth: null,
    roomWest: 26,
    roomEast: 36,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm56',
    floor: 3
  })
  const room36 = new Room({
    roomId: 36,
    roomNorth: 37,
    roomWest: 35,
    roomEast: null,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm57',
    floor: 3
  })
  const room37 = new Room({
    roomId: 37,
    roomNorth: 38,
    roomWest: null,
    roomEast: null,
    roomSouth: 36,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm47',
    floor: 3
  })
  const room38 = new Room({
    roomId: 38,
    roomNorth: 40,
    roomWest: 39,
    roomEast: null,
    roomSouth: 37,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm37',
    floor: 3
  })
  const room39 = new Room({
    roomId: 39,
    roomNorth: null,
    roomWest: 28,
    roomEast: 38,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm36',
    floor: 3
  })
  const room40 = new Room({
    roomId: 40,
    roomNorth: 41,
    roomWest: null,
    roomEast: null,
    roomSouth: 38,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm27',
    floor: 3
  })
  const room41 = new Room({
    roomId: 41,
    roomNorth: 42,
    roomWest: null,
    roomEast: null,
    roomSouth: 40,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm17',
    floor: 3
  })
  const room42 = new Room({
    roomId: 42,
    roomNorth: null,
    roomWest: null,
    roomEast: 43,
    roomSouth: 41,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm7',
    floor: 3
  })
  const room43 = new Room({
    roomId: 43,
    roomNorth: null,
    roomWest: 42,
    roomEast: 44,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm8',
    floor: 3
  })
  const room44 = new Room({
    roomId: 44,
    roomNorth: null,
    roomWest: 43,
    roomEast: null,
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm9',
    floor: 3
  })
  roomArr = [startingRoom, room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15, room16, room17, room18, room19, room20, room21, room22, room23, room24, room25, room26, room27, room28, room29, room30, room31, room32, room33, room34, room35, room36, room37, room38, room39, room40, room41, room42, room43, room44]

  export default roomArr