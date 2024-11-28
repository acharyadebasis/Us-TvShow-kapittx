import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetails } from '../services/tvmazeApi';
import styled from 'styled-components';

// Styled Components for layout
const DetailWrapper = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const ShowImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ShowSummary = styled.div`
  margin-top: 20px;
  line-height: 1.6;
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const InfoItem = styled.li`
  margin-bottom: 10px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  color: gold;
  margin-right: 5px;
`;

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const showData = await getShowDetails(id);
        setShow(showData);
      } catch (error) {
        console.error('Error fetching show details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  
  const renderStars = (rating) => {
    
    const validRating = (typeof rating === 'number' && rating >= 0 && rating <= 10) ? rating : 0;

    
    const fullStars = Math.floor(validRating);
    const emptyStars = Math.max(0, 5 - fullStars); 
    return (
      <>
      
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`}>&#9733;</Star> 
        ))}
       
        {[...Array(emptyStars)].map((_, index) => (
          <Star key={`empty-${index}`}>&#9734;</Star> 
        ))}
      </>
    );
  };

  const { name, image, summary, genres, premiered, language, network, rating, schedule, officialSite } = show;

  return (
    <DetailWrapper>
      <h2>{name}</h2>
      <ShowImage src={image?.original || 'https://via.placeholder.com/600x400'} alt={name} />
      <ShowSummary>
        <p>{summary?.replace(/<\/?[^>]+(>|$)/g, '')}</p>
      </ShowSummary>

      <InfoList>
        <InfoItem><strong>Premiered:</strong> {premiered}</InfoItem>
        <InfoItem><strong>Genres:</strong> {genres.join(', ')}</InfoItem>
        <InfoItem><strong>Language:</strong> {language}</InfoItem>
        <InfoItem><strong>Network:</strong> {network?.name}</InfoItem>
        <InfoItem><strong>Official Site:</strong> <a href={officialSite} target="_blank" rel="noopener noreferrer">{officialSite}</a></InfoItem>

        <InfoItem>
          <strong>Schedule:</strong> {schedule?.days.join(', ')} at {schedule?.time}
        </InfoItem>

        <InfoItem>
          <strong>Rating:</strong>
          <RatingWrapper>
            {renderStars(rating?.average)} <span>{rating?.average} / 10</span>
          </RatingWrapper>
        </InfoItem>
      </InfoList>
    </DetailWrapper>
  );
};

export default ShowDetails;
