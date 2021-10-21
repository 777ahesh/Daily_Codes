    import React from 'react';
    import Card from "./Cards";
    import Sdata from "./Sdata";
    
   

    const App = () =>{
       return(
       <> 
       <h1 className="heading_style"> List of top five Netflix in 2021</h1>
       <div className="Cards">
       {Sdata.map((val) => {
            console.log(val.id);
            return(
            <Card 
            
            key={val.id}
            imgsrc={val.imgsrc}
            title= {val.title}
            sname={val.sname}
            link={val.links}
            />
            );
        })}    
        </div>
        </> );
        
    } 
  export default App;