import {
    Div,
    P,
    Bar,
    PercentComplete,
    Span,
    Wrapper,
} from './styles'
import PlaylistDropdown from '../PlaylistDropdown/PlaylistDropdown'
import { calculatePercentComplete } from '../../utils/utils'
import { AppSettingsContext } from '../../contexts/appSettingsContext'
import { useContext } from 'react';

const PlaylistHeader = ({ state, update }) => {
    const appSettingsContext = useContext(AppSettingsContext);
    const { view } = appSettingsContext.state;

    return (
        <Wrapper view={view}>
            <PlaylistDropdown id={ state.id } />
            <Div view={view}>
                { `${calculatePercentComplete(state.items)}%` }
                <Span>{ state.title }</Span>
            </Div>
            <P>Due: { state.date }</P>
            <Bar>
                <PercentComplete
                    percentage={ `${calculatePercentComplete(state.items)}%` }
                />
            </Bar>
        </Wrapper>
    )
}

export default PlaylistHeader