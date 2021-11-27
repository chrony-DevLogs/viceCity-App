import { useSelector } from "react-redux";

const Home = ()=>{

    const trilogy = useSelector((state) => state.trilogy.trilogy)

    return(
        <div className="intro">
            <h2>Welcome back to vice city</h2>
            <h1>We hope that you learned swimming</h1>
            <br />
            <div className="introText">
                <p>
                    Grand Theft Auto III, Grand Theft Auto Vice City, and Grand Theft Auto San Andreas — the trilogy of the popular action-adventure role-playing games — are getting remastered, publisher Rockstar Games has announced confirming earlier rumours. The new games will be available later this year in a package that is titled Grand Theft Auto: The Trilogy – The Definitive Edition. In terms of upgrade, the remastered versions of the traditional GTA titles are claimed to have graphical improvements and modern gameplay enhancements while maintaining the classic look and feel of the originals.
                </p>
            </div>
            <div>
                {trilogy.map(x => <GameCard myUrl={x.url}/>)}
            </div>
        </div>
    )
}

const GameCard = ({myUrl})=>{
    const MyStyle = {background:`url(${myUrl}) center`,backgroundRepeat:"no-repeat",backgroundSize:"cover"};
    return(
        <div className="gameCard" style={MyStyle}></div>
    )
}

export default Home;