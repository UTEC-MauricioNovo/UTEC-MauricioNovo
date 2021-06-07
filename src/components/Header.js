import React from 'react';

const Header = ({ handleDarkMode }) => {
    return(
        <div className='header'>
            <h1>Sticky Notes</h1>
            <button 
                onClick={()=>
                    handleDarkMode(
                        (previousDarmode)=> !previousDarmode)
                    }
                className='save'>
                Toggle Mode
            </button>

        </div>
    )
}

export default Header;