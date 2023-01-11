import React from "react";
import Disk from "./Components/Disk";

function Tower({disks,selectedTower,isSelected,selectSelf,swap}) {
     const diskElements=disks.map(disk=>{
          return (
               <>
                    {disk!=0 &&<Disk diskNum={disk}/>}
               </>
          )
     })
     function handleClick(){
          if(selectedTower==null){
               selectSelf()
          }else if(isSelected==false){
               console.log("hi")
               swap()
          }
     }

     return ( 
          <div className={`tower ${isSelected?"selected":""}`} onClick={handleClick}>
               <div className="stick">
               </div>
               {diskElements}
          </div>     
     );
}

//Remove after
Tower.defaultProps={
     disks:[1,2,3,4]
}

export default Tower;
