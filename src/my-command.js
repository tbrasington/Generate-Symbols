
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


  //symbolList.forEach(item=> {})
    // if(item.name==="core/input/default"){
  
    //   let instance = item.createNewInstance()

    //   var group = new sketch.Group({
    //     name: 'my name',
    //     parent :  context.document.currentPage(),
    //     layers: [
    //       instance
    //     ],
    //   })
    // }

  // var master = new SymbolMaster({
  //   name: 'my symbol master',
  // })

  //createNewInstance
}
