import React, { FC } from "react"
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    TwitterIcon,
    TwitterShareButton,
    LinkedinIcon,
    LinkedinShareButton
} from 'react-share'



const appURL = "https://kombuchatea.netlify.app/"

const SocialComponent: FC = () => {
    return (
        <>
            <div className="footer-socialmedia">
                <div className="footer-facebook">
                    <FacebookShareButton url={appURL}>
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                </div>
                <div className="footer-messenger">
                    <FacebookMessengerShareButton url={appURL} appId="521270401588372">
                        <FacebookMessengerIcon size={32} round={true} />
                    </FacebookMessengerShareButton>
                </div>
                <div className="footer-twitter">
                    <TwitterShareButton url={appURL}>
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                </div>
                <div className="footer-linkedin">
                    <LinkedinShareButton url={appURL} >
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                </div>
            </div>
        </>
    )
}

export default SocialComponent