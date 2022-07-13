import React from 'react';

//***************************** Tooltip Component *******************//
function Tooltip({props}) {
    console.log("props " + props);
    return(
        <div>
            {(props === 'top' && 
                <div id="top">
                    <div id="tool_top">I am {props} Tooltip!</div>
                    <div id="triangletop"></div>
                </div>
            )}

            {(props === 'bottom' && 
                <div id="bottom">
                    <div id="tool_bottom">I am {props} Tooltip!</div>
                    <div id="trianglebottom"></div>
                </div>
            )}

            {(props === 'left' && 
                <div id="left">
                    <div id="tool_left">I am {props} Tooltip!</div>
                    <div id="triangleleft"></div>
                </div>
            )}

            {(props === 'right' && 
                <div id="right">
                    <div id="tool_right">I am {props} Tooltip!</div>
                    <div id="triangleright"></div>
                </div>

            )}

        </div>
    );
}

export default Tooltip;