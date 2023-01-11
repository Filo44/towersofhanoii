import React, { useState, useEffect } from 'react';
import Tower from "./Tower"
import Confetti from 'react-confetti'

function App() {
  const [towerArray,setTowerArray]=useState([[1,2,3,4],[0,0,0,0],[0,0,0,0]])
  const [selectedTower,setSelectedTower]=useState(null)
  const [won,setWon]=useState(false)

  function swap(swapFindex,swapTindex){
    setTowerArray(prevTowerArray=>{
      let firstArray=towerArray[swapFindex]
      let secondArray=towerArray[swapTindex]
      for(let i=0;i<4;i++){
        var num=firstArray[i]
        if(num!=0){
          firstArray[i]=0
          break;
        }
      }
      if(num==0){
        return prevTowerArray
      }
      for(let i=0; i<4;i++){
        if(secondArray.length===i || secondArray[i+1]!=0){
          secondArray[i]=num
          break;
        }
      }
      let rArray=[...prevTowerArray]
      rArray[swapFindex]=firstArray
      rArray[swapTindex]=secondArray
      return rArray
    })
    setSelectedTower(null)
  }
  function areArraysEqual(arr1,arr2){
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true
  }
  function reset(){
    setTowerArray([[1,2,3,4],[0,0,0,0],[0,0,0,0]])
    setSelectedTower(null)
    setWon(false)
  }

  useEffect(()=>{
    if(areArraysEqual(towerArray[1],[1,2,3,4]) || areArraysEqual(towerArray[2],[1,2,3,4])){
      setWon(true)
      console.log("won")
    }
  },[towerArray])
  
  

  const towerElements=towerArray.map((tower,index)=>{
    return (
      <Tower 
        disks={tower} 
        selectedTower={selectedTower} 
        isSelected={selectedTower===index} 
        selectSelf={()=>setSelectedTower(index)}
        swap={()=>swap(selectedTower,index)}
        key={index}
       />
    )
  })

  return (
    <>
      {towerElements}
      {won && 
        <>
          <button className='restartButton' onClick={reset}>Restart</button>
          <Confetti/>
        </>  
      }
    </>
  );
}

export default App;