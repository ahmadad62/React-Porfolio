import { Box } from "@mui/material";
import SocialIcon from "../SocialIcon";
import './Media.scss'
import { info } from "../../info/info";

export default function Media() {
    console.log(info)
    return (
        <div id="media">
        <Box
            
            display={'flex'}
            gap={'1.5rem'}
            justifyContent={'center'}
            fontSize={{
                xs: '2rem',
                md: '2.5rem',
                color: 'black'
            }}
            marginTop={'4rem'}
        >

            {info.socials.map((social, index) => (
                <SocialIcon
                    key={index}
                    link={social.link}
                    icon={social.icon}
                    label={social.label}
                />
            ))}
        </Box>
        </div>
    )
}