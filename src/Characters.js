import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Style.css'

function Characters(){

    return(
        <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="character-img" variant="top" src="https://occ-0-1007-325.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUX2KYwwhnfPwUIGOPB6DKz-f2tiWG2I1yE0swf9FQihfCjOYZg0eKiWdtExO4N0kjwkAWuTFhu1eLD2eesOqjtxsI0BaBdkFCRp.jpg?r=219"/>
                <Card.Body>
                    <Card.Title>Yugi Muto</Card.Title>
                    <Card.Text>
                        He is the main protagonist of the original Yu-Gi-Oh! series, along with Yami Yugi. It was stated once that Yugi is the modern day version of Pharaoh Atem.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="character-img" variant="top" src="https://ms.yugipedia.com//1/1f/JoeyWheeler-DULI.png"/>
                <Card.Body>
                    <Card.Title>Joey Wheeler</Card.Title>
                    <Card.Text>
                        He is one of the main characters in Yu-Gi-Oh!. He is best friends with Yugi Muto. Joey starts out as an inexperienced Duelist, but he later becomes one of the greatest Duelists in the world.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="character-img" variant="top" src="https://preview.redd.it/sjz4lrj88oi91.jpg?width=480&format=pjpg&auto=webp&s=6e113065dbc9549e120fffb3eaf6fd04adf7cba6"/>
                <Card.Body>
                    <Card.Title>Seto Kaiba</Card.Title>
                    <Card.Text>
                        He is the older brother of Mokuba and the modern-day reincarnation of Priest Seto, himself the original keeper of the Blue-Eyes White Dragon.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default Characters;