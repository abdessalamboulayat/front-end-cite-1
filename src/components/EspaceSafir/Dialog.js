import React from 'react';

function Dialog(props){

    return(
        <div className="dialog" >
            <div className='box_dialog'>
                <h6>{props.message}</h6>
                <div className='dialog_button'>
                    <button className='btn_oui'  onClick={()=>props.onDialog(true)}>Oui</button>
                    <button className='btn_non'  onClick={()=>props.onDialog(false)}>Non</button>
                </div>
            </div>

        </div>
    )
}

export default Dialog;