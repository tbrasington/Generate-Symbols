
import sketch from 'sketch'

// export default function(){
//   log (sketch.getDocuments()[0].getSymbols()[0] )
// }

const symbolsNeeded = [
 { 
   name : "generated/default",
    children : [
    {
      id : 'core/label',
      frame : {
        x : 0,
        y : 0
      }
    },
    {
      id : 'core/input/default',
      frame: {
        x : 0,
        y : 40
      }
    },
    {
      id : 'core/message/default',
      frame:{
        x : 0,
        y : 100
       }
    }
  ]
}
]
export default function(context) {

  const document = sketch.fromNative(context.document)
  let symbolList = document.getSymbols();
 // const result = symbolList.filter(symbol => symbol.name === "core/message/default");

  symbolsNeeded.forEach(item=> {
    
    let symbolInstances = item.children.map(layer=>{
      return {frame: layer.frame, master : (symbolList.filter(symbol => symbol.name === layer.id)[0]) }
    });

    console.log(item.name)
    //console.log(symbolInstances)
      let layers = symbolInstances.map(symbol=> {
        
        let instance =  symbol.master.createNewInstance()
        instance.frame = symbol.frame;
        return instance;
         
      })

      new sketch.SymbolMaster({
          name:  item.name,
          layers : layers,
          parent : context.document.currentPage() // add to symbols page
      })
  });
}


// text input structures
const IDEA_1_input = [

  {
    name : "Input text", 
    layers : [{
      element : "field",
      variations : ['default', 'hover', 'focus', 'error', 'success'],
      frame : { x: 0, y: 0, width: 100, height: { bp1: 44, bp3 : 40 }}
    } ]
  },

  {
    name : "Label + Input text", 
    layers : [
      {
        element : "label",
        variations : "default",
        frame : { x: 0, y: 0, width: 100}
      },
      {
        element : "field",
        variations : ['default', 'hover', 'focus', 'error', 'success'],
        frame : { x: 0, y: 0, width: 100, height: { bp1: 44, bp3 : 40 }}
    }] 
  }
];

const IDEA_2_input = [
  {
    name: "default",
    ...elementsAndVariations
  },
  {
    name: "focus",
          
  },
  {
    name: "hover",
          
  },
  {
    name: "error",
          
  },
  {
    name: "success",
          
  }
]

const IDEA_3_input = {

    masterFrame : [
      {
        element : "label",
        frame : { x: 0, y: 0, width: 100}
      },
      {
        element : "field",
        frame : { x: 0, y: 20, width: 100, height: { bp1: 44, bp3 : 40 }}
      },
      {
        element : "value",
        frame : { x: 0, y: 30, width: 100}
      },
      {
        element : "message",
        frame : { x: 0, y: { bp1: 64, bp3 : 60 }, width: 100}
      }
    ],
    configs : [

    ]
}