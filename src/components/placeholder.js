import styled from 'styled-components';

const Placeholder = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  position: relative;
`;

export default Placeholder;
