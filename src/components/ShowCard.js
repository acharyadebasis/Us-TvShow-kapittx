import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ShowImage = styled.img`
  width: 100%;
  height: auto;
`;

const ShowInfo = styled.div`
  padding: 10px;
  text-align: center;
`;

const ShowCard = ({ show }) => {
  return (
    <CardWrapper>
      <ShowImage src={show.image?.medium || 'https://via.placeholder.com/200'} alt={show.name} />
      <ShowInfo>
        <h3>{show.name}</h3>
      </ShowInfo>
    </CardWrapper>
  );
};

export default ShowCard;
