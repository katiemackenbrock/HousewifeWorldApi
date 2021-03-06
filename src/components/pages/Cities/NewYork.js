import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

const NewYork = (props) => {

    const [york, setYork] = useState([]);
    const bravoUrl = (`${process.env.REACT_APP_BRAVO_API}searchcity?city=New York City`)

    useEffect(() => {
        console.log(bravoUrl)
        fetch(bravoUrl)
            .then(response => response.json())
            .then(jsonData => {
                setYork((jsonData))
                console.log(jsonData)
            })
    }, [])

    if (york.length < 1) {
        return (<h4>Content is loading</h4>)
    } else {
        let content = york.db.map((nycWives, i) => {
            return (
                <li className="nycWivesList" key={`nycWives-${i}`}>
                    <img className="nycWivesImg" src={nycWives.img_url} />
                    <p className="wifeName">{nycWives.first_name} {nycWives.last_name}</p>
                    <form method="POST" action="/profile">
                        <input hidden type="text" name="first_name" value="{nycWives.first_name}" />
                        <input hidden type="text" name="last_name" value="{nycWives.last_name" />
                        <input hidden type="text" name="img_url" value="{nycWives.img_url}" />
                        <button class="faveBtn" type="submit">ADD TO FAVORITES</button>
                    </form>
                </li>
            )
        })


        return (
            <div className="city">
                <h1 className="cityHead"><b>The Real Housewives of New York City 🍎</b></h1>
                <div className="vidIntroPanel">
                    <div className="vid">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=9Mg24ziklug"
                        />
                    </div>
                    <div className="cityIntro">
                        <h2 className="welcomeCity"><b>Welcome to New York City, dolls. The RHONY, <i>anagram for horny</i>, franchise first premiered on Bravo in March of 2008, and <i>phew</i>, these broads sure do make it nice.</b></h2>
                        <h3 className="welcomeCity">🍎 NYC: Where we never stop hearing about SkinnyGirl.</h3>
                        <h3 className="welcomeCity">🍎 Where money can't buy you class, and elegance is learned, my friend.</h3>
                        <h3 className="welcomeCity">🍎 Where Christmas is our favorite season because we get to spend it at the Bezerkshires.</h3>
                        <h3 className="welcomeCity">🍎Where we hate when it's about Tom. <i>How could you do this to us. Question Mark.</i></h3>
                        <h3 className="welcomeCity">🍎 Where we are still waiting for a toaster oven, but we have a full blown cabaret.</h3>
                        <h4 className="welcomeCity"><i>*But keep in mind- life is not a cabaret, you sicko.*</i></h4>
                        <h3 className="welcomeCity">🍎 And last but not least, where we are truly sitting here wondering, 'What <i>are</i> we doing here without Dorinda?</h3>
                    </div>
                </div>
                <div className="grid">
                    <ul className="city-wives">
                        {content}
                    </ul>
                </div>
            </div>
        )
    }
};

export default NewYork;