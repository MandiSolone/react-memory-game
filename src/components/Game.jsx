import RandomNumber from "./RandomNumber";


export function Game (){ 

       return ( 
      <main className="App-container">
            <div className="Announcement-div">
            <h3>Sorry, wrong answer!</h3> 
            {/* //how to tie this answer to randomNumber?  */}
            </div >
            <div className="App-item-container d-flex justify-content-around align-items-centerd">
                <RandomNumber />
            </div>
        </main>  
       );
}

