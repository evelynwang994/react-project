import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

function Games(){

    return(
        <MDBRow className='mt-5'>
            <MDBCol xl={4} lg={6} className='mb-4'>
                <MDBCard>
                    <MDBCardBody>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://occ-0-1007-325.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUX2KYwwhnfPwUIGOPB6DKz-f2tiWG2I1yE0swf9FQihfCjOYZg0eKiWdtExO4N0kjwkAWuTFhu1eLD2eesOqjtxsI0BaBdkFCRp.jpg?r=219'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Yugi</p>
                                <p className='text-muted mb-0'>1234@gmail.com</p>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol xl={4} lg={6} className='mb-4'>
                <MDBCard>
                    <MDBCardBody>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://ms.yugipedia.com//1/1f/JoeyWheeler-DULI.png'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Joey</p>
                                <p className='text-muted mb-0'>5678@gmail.com</p>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol xl={4} lg={6} className='mb-4'>
                <MDBCard>
                    <MDBCardBody>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://preview.redd.it/sjz4lrj88oi91.jpg?width=480&format=pjpg&auto=webp&s=6e113065dbc9549e120fffb3eaf6fd04adf7cba6'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Kaiba</p>
                                <p className='text-muted mb-0'>abcd@gmail.com</p>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default Games;