import {
    Div,
    P,
    Bar,
    PercentComplete,
    Span,
} from './styles'
import PlaylistDropdown from '../PlaylistDropdown/PlaylistDropdown';
import { calculatePercentComplete } from '../../utils/utils'

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