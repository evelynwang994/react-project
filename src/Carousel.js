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
                src='https://cdn.mos.cms.futurecdn.net/wc42Pb2AmwxWWjBuSK7RYM.jpg'
                alt='Dune'
            >
                <h5>Dune</h5>
                <p>Dune Introduction</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLJypBWoaq7p4bMwHVlShFEEl7c8vx6sKPw&usqp=CAU'
                alt='Devotion'
            >
                <h5>Devotion</h5>
                <p>Devotion Introduction</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://m.media-amazon.com/images/M/MV5BY2U4ZDE0M2EtM2M0Zi00Yzk2LThhNzQtMWQwNzBhODNkMmM5XkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_.jpg'
                alt='The Bridge Curse'
            >
                <h5>The Bridge Curse</h5>
                <p>The Bridge Curse Introduction</p>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}

export default Carousel;