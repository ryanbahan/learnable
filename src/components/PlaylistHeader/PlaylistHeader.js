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

const PlaylistHeader = ({ state, update }) => {
    return (
        <>
            <PlaylistDropdown id={ state.id } />
            <Div>
                { `${calculatePercentComplete(state.items)}%` }
                <Span>{ state.title }</Span>
            </Div>
            <P>Due: { state.date }</P>
            <Bar>
                <PercentComplete
                    percentage={ `${calculatePercentComplete(state.items)}%` }
                />
            </Bar>
        </>
    )
}

export default PlaylistHeader