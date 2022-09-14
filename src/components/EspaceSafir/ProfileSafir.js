import React from 'react';
import NavBar from '../Component/NavBar';
import LeftBar from '../Component/LeftBar';

function ProfileSafir(){

    return(
        <div>
            {/* <NavBar /> */}
            <div >
                <div className='row'>
                    <div className='col-xl-3'>
                        <LeftBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSafir;