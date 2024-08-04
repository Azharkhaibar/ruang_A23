import React from "react";
import { Dnavbar, Unavbar } from "../components/frontend/landpage/navbar";
import HomeOne from "../components/frontend/landpage/home";
import Service from "../components/frontend/landpage/service";

class Home extends React.Component {
    render() {

        

        const Ufile = {
            imgUrl1: "/public/image/phone-call.png",
            logo: "/public/image/logoruang32.png",
            email: "/public/image/email.png"
        };

        const Isosmed = {
            ig: "/public/image/instagram.png",
            twitter: "/public/image/twitter.png",
            fb: "/public/image/facebook.png",
            pinterest: "/public/image/pinterest.png",
            S: "/public/image/search.png",
            drdown: "/public/image/down.png"
        };

        const headerIMG = {
            imgRoom: "/public/image/showroom1.jpeg"

        };

        const concept = {
            idea1: "/public/image/image2-12.jpg",
            idea2: "/public/image/image3-11.jpg",
            idea3: "/public/image/image4-3.jpg",
        }

        const txtDesc = {
            textDesc1: "Nunc eleifend eget nunc eget consequat. Etiam sed varius est. Proin et lacus odio.",
            textDesc2: "Nunc eleifend eget nunc eget consequat. Etiam sed varius est. Proin et lacus odio.",
            textDesc3: "Nunc eleifend eget nunc eget consequat. Etiam sed varius est. Proin et lacus odio.",
            textDesc4: "Nunc eleifend eget nunc eget consequat. Etiam sed varius est. Proin et lacus odio.",
        }

        const txtProv = {
            longTxt:"Inoterior design consultancy firm that brings sensitivity to the design top restaurants, hotels, offices & homes around the world. We stand for quality, safety and credibility, so you could be trust us fully about architectural working process."
        }


        const iconsServ = {
            imgIcon: "/public/image/2942076-1.png"
        }

        return (
            <div>
                <Unavbar Ufile={Ufile} />
                <Dnavbar Dfile={Isosmed} />
                <HomeOne 
                    Hfile={headerIMG}
                    Ifile={concept}
                    txt={txtProv}
                />
                <Service 
                    iconsServ={iconsServ} // Ganti prop ini menjadi 'iconsServ' agar sesuai dengan yang ada di Service.js
                    DescServ={txtDesc}
                />


            </div>
        );
    }
}

export default Home;

export const imgServ = {
  imgS: "/public/image/newcustom.jpg",
};

export const txtProv = {
  longTxt:
    "Inoterior design consultancy firm that brings sensitivity to the design top restaurants, hotels, offices & homes around the world. We stand for quality, safety and credibility, so you could be trust us fully about architectural working process.",
};