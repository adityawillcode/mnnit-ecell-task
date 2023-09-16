import React,{useState} from 'react'

function GridBox() {
    const [redBoxIndex,setRedBoxIndex]=useState([])
    const [gridBox,setGridBox]=useState(
        [
        {id:0,color:'#00407A'},
        {id:1,color:'#00407A'},
        {id:2,color:'#00407A'},
        {id:3,color:'#00407A'},
        {id:4,color:'#00407A'},
        {id:5,color:'#00407A'},
        {id:6,color:'#00407A'},
        {id:7,color:'#00407A'},
        {id:8,color:'#00407A'}
        ]
        )

      


        const changeColorToRed = (index) => {
            
            if(index<8){
                setRedBoxIndex([...redBoxIndex, index]) 
                const newGridArray=[...gridBox]
                newGridArray[index].color='#7A0000'
                setGridBox(newGridArray);
            }
            else{
                changeColorToBlue()
            }
            
                       };


          const changeColorToBlue= ()=> {
            const resettingArray = [...gridBox]; 
            let i = redBoxIndex.length - 1;
              
              function updateColorAtIndex() {
               
                 if (i >= 0) {
                  resettingArray[redBoxIndex[i]].color = '#00407A';
                  setGridBox([...resettingArray]);
                    i--;
                setTimeout(updateColorAtIndex, 1000); 
                
                    }
              }
            
              updateColorAtIndex();

            }
 

        // red : #7A0000
        // blue: #00407A



    return (
        <div>
            <div className='h-[350px] w-[350px]  shadow-[0px_0px_3px_3px_rgba(0,0,0,0.40)] bg-[#D9D9D9] rounded-lg flex justify-center items-center p-[1rem] '>
            <div className='flex flex-wrap gap-5 justify-center items-center'>
         {
            gridBox.map((box,index)=>{
                return(
                    <div key={index} className={`h-[75px] w-[75px] rounded-[12px] `} style={{backgroundColor:box.color}}  onClick={()=>{changeColorToRed(index)}}  ></div>
                )
            })
            }
         </div>

            </div>
        </div>
    )
}

export default GridBox