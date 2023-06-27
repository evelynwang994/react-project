import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Style.css'

function MainMonsters(){
    return(
        <MDBRow className="mt-5">
            <MDBCol lg='4' md='12' className='mb-4'>
                <img src='https://images.ygoprodeck.com/images/cards/46986414.jpg' className='img-fluid rounded monster-img' alt='Black Magician' />
            </MDBCol>
            <MDBCol lg='4' md='12' className='mb-4'>
                <img src='https://pm1.aminoapps.com/6080/f9064efe576f2355391da0ae61209d6beed37422_hq.jpg' className='img-fluid rounded monster-img' alt='Fire Warrior' />
            </MDBCol>
            <MDBCol lg='4' md='12' className='mb-4'>
                <img src='https://commondatastorage.googleapis.com/images.pricecharting.com/4f4753a4580bf3bd2fb11cc7324bf00fa1a761ad015d55c30b5b7edc2d933432/240.jpg' className='img-fluid rounded monster-img' alt='Blue Eyes White Dragon' />
            </MDBCol>
        </MDBRow>
    );
}

export default MainMonsters;