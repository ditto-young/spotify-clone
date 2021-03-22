import React from 'react';
import './Body.css';
import Header from './Header';
import { useStateValue } from './StateProvider';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function Body({spotify}) {
    const [{ discover_weekly }, dispatch] = useStateValue();

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img 
                    src="https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png"
                    //{discover_weekly?.images[0].url}
                    alt=""
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon/>
                    <FavoriteIcon/>
                    <MoreHorizIcon/>
                </div>
            </div>

        </div>
    );
}

export default Body;
