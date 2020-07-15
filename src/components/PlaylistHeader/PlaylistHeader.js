import styled, { css } from 'styled-components';
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

export const Bar = styled.div.attrs({
    'data-testid': 'progressbar',
})`
  height: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

export const PercentComplete = styled.div`
  height: 1rem;
  background-color: #2ecc71;
  ${({ percentage }) =>
        css`
      width: ${percentage};
    `}
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.fontSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacers.xs};
  text-align: right;
`;

export const Div = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacers.xs};
  margin-top: ${({ theme }) => theme.spacers.sm};
`;

export const Span = styled.span`
  font-weight: 500;
`;