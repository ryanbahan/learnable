import {
    Div,
    P,
    Bar,
    PercentComplete,
    Span,
} from './styles'
import PlaylistDropdown from '../PlaylistDropdown/PlaylistDropdown';

const calculatePercentComplete = (arr) => {
    if (arr.length) {
        const completedItems = arr.filter((item) => item.is_complete === true);
        return ((completedItems.length / arr.length) * 100).toFixed();
    }
    return 0;
};

const PlaylistHeader = ({ playlistId, title, dueDate, playlistItems }) => {
    return (
        <>
            <PlaylistDropdown id={playlistId} />
            <Div>
                {`${calculatePercentComplete(playlistItems)}%`}
                <Span>{title}</Span>
            </Div>
            <P>Due: {dueDate}</P>
            <Bar>
                <PercentComplete
                    percentage={`${calculatePercentComplete(playlistItems)}%`}
                />
            </Bar>
        </>
    )
}

export default PlaylistHeader