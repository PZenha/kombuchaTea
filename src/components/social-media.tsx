import React, { FC } from "react"

//@ts-ignore
import { SocialMediaIconsReact } from "social-media-icons-react"


const SocialComponent: FC = () => {
    return (
        <>

            <div className="footer-socialmedia">
                <div className="footer-facebook">
                    <SocialMediaIconsReact
                        borderColor="rgba(0,0,0,0.25)"
                        borderWidth="0"
                        borderStyle="solid"
                        icon="facebook"
                        iconColor="rgba(255,255,255,1)"
                        backgroundColor="rgba(2,40,152,1)"
                        iconSize="5" roundness="49%"
                        url="https://facebook.com/"
                        size="32" />

                </div>
                <div className="footer-twitter">
                    <SocialMediaIconsReact
                        borderColor="rgba(0,0,0,0.25)"
                        borderWidth="0"
                        borderStyle="solid"
                        icon="twitter"
                        iconColor="rgba(255,255,255,1)"
                        backgroundColor="rgba(28,186,223,1)"
                        iconSize="5"
                        roundness="49%"
                        url="https://twitter.com/"
                        size="32" />

                </div>
                <div className="footer-linkedin">
                    <SocialMediaIconsReact
                        borderColor="rgba(0,0,0,0.25)"
                        borderWidth="0"
                        borderStyle="solid"
                        icon="linkedin"
                        iconColor="rgba(255,255,255,1)"
                        backgroundColor="rgba(40,88,112,1)"
                        iconSize="1"
                        roundness="49%"
                        url="https://linkedin.com/"
                        size="32" />

                </div>
                <div className="footer-insta">
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"
                        borderWidth="0"
                        borderStyle="solid"
                        icon="instagram"
                        iconColor="rgba(255,255,255,1)"
                        backgroundColor="rgba(206,28,223,1)"
                        iconSize="5"
                        roundness="50%"
                        url="https://www.instagram.com/"
                        size="32"
                    />
                </div>
            </div>
        </>
    )
}

export default SocialComponent