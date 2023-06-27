import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './Style.css'

function Carousel() {
    return(
        <MDBCarousel showIndicators showControls fade>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://i.pinimg.com/originals/ce/d0/2c/ced02cef893593184122b3fec272c158.jpg'
                alt='Osiris'
            >
                <h5>Osiris</h5>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://ms.yugipedia.com//b/be/Obelisk.png'
                alt='Obelisk'
            >
                <h5>Obelisk</h5>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9_Bkp6No9c54kDts85IyGQylfrYOSHc_-w&usqp=CAU'
                alt='Ra'
            >
                <h5>Ra</h5>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}

export default Carousel;