import React from 'react'

const BadRobot = (prop) => {
    
    if(prop.name.length > 5){
        return <div>I hear you saying Blablablabla. Is this correct?
        </div> }
    else {
        return <div>I hear you saying Blabla. Is this correct?
        </div>
    
    } 
}

export default BadRobot