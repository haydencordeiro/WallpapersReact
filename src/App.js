import React from 'react';
import {useState} from 'react';
import {useEffect } from 'react';
import './App.css';
import  './components/image.css'
// eslint-disable-next-line react-hooks/exhaustive-deps 
const App=()=> {
  let[linksList,setLinksList]=useState([])
  const[count,setCount]=useState(0)
 


  const getData=async()=>{
    const response=await fetch('https://picsum.photos/1080');
    const data=await response;
    console.log(data.url)
    let temp=[...linksList]
    temp.push(data.url)
    
    setLinksList(temp)
    console.log(linksList)
    if(count<11)
    {
      setCount(count+1)
    }
    


  }
  
  useEffect(
    ()=>{

        getData()
      
      
    },
  [count]
  )

  
  
  
  
  
  return (
<div>
      {linksList.map(i=>
			<div className="gallery" key={i}>
				<a href={i}>
					<img src={i} alt="Cinque Terre" width="600" height="400" />
				</a>
			</div>
            )}
           
		</div>
  );



}

export default App;
