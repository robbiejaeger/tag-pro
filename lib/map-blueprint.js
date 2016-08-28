export default class MapBlueprint {
  constructor() {

    this.test = {
      tiles: [ 53, 164, 164, 164, 164, 164, 164, 56,
               81, 78, 78, 78, 78, 78, 78, 92,
               81, 78, 78, 78, 78, 78, 78, 92,
               81, 78, 78, 78, 78, 78, 78, 92,
               81, 78, 78, 78, 78, 78, 78, 92,
               81, 78, 78, 78, 78, 1, 78, 92,
               81, 78, 78, 78, 78, 78, 78, 92,
               168, 164, 164, 164, 164, 164, 164, 165
             ],
      columns: 8,
      rows: 8,
      blueFlagOptions: { color: 'blue', x: 150, y: 150 },
      redFlagOptions: { color: 'red', x: 250, y: 250 }
    }

    this.level_one = { 
      tiles: [ 53, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164,  56,
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  1,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  1,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  1,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  1,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  1,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  1,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  1,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  1,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  1,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  1,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               81,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  78,  81,  
               168, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 165
             ],
    columns: 25,
    rows: 16,
    blueFlagOptions: { color: 'blue', x: 200, y: 320 },
    redFlagOptions: { color: 'red', x: 760, y: 320 }
    }
  }
}