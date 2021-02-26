import { useEffect, useState } from 'react';
import ReactPlayer from "react-player";


const Atlanta = (props) => {
    console.log(props)
    const [atlanta, setAtlanta] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=Atlanta`)

    useEffect(() => {
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setAtlanta((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (atlanta.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = atlanta.db.map((atlWives, i) => {
            return (
                <li className="atlWivesList" key={`atlWives-${i}`}> <img className="atlWivesImg" src={atlWives.img_url} /> {atlWives.first_name} {atlWives.last_name} <button className="faveBtn" type="submit">ADD TO FAVORITES</button> </li>
            )
        })


        return (
            <div>
                <h1 className="cityHead"><b>The Real Housewives of Atlanta 🍑</b></h1>
                <div className="vidIntroPanel">
                    <div className="vid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=DyrQeVQWK4o"
                        />
                    </div>
                    <div className="cityIntro">
                        <h2 className="welcomeCity">Welcome to Atlanta. This franchise first premiered on Bravo in October of 2008, and our lives have never been the same.</h2>
                    </div>
                </div>
                <ul className="city-wives">
                    {content}
                </ul>
            </div>
        )
    }
};

export default Atlanta;