import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAiringShows } from '../services/tvmazeApi';
import ShowCard from './ShowCard';
import styled from 'styled-components';

const ShowListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const showsData = await getAiringShows();
        setShows(showsData);
      } catch (error) {
        console.error("Error fetching shows:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  return (
    <ShowListWrapper>
      {loading ? (
        <div>Loading...</div>
      ) : (
        shows.map((show) => (
          <Link key={show.id} to={`/show/${show.show.id}`}>
            <ShowCard show={show.show} />
          </Link>
        ))
      )}
    </ShowListWrapper>
  );
};

export default ShowList;
