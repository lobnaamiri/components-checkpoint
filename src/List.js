import React from 'react';
import ListItem from './ListItem.js'

function List(){
    return(
        <div>
            <h1 style={{fontFamily:'Verdana'}}>Head!</h1>
            <div style={{backgroundColor:'yellow'}}> 
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
               
            </div>
            <div>
                <h1 style={{backgroundColor:'green'}}> Footer! </h1>
            </div>
        </div>
    )
}
export default List;