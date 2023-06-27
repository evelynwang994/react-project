import { MDBContainer } from "mdb-react-ui-kit";

function Video(){
    return(
        <MDBContainer>
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src="https://www.youtube.com/embed/L5hx5rvLUN8"
                    title="Yugioh Trailer"
                    allowFullScreen>
                </iframe>
            </div>
        </MDBContainer>
    );
}

export default Video;