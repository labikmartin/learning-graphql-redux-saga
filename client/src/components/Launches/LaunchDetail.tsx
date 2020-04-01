import React from 'react';
import { useParams } from 'react-router';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export interface LaunchDataInterface {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_local: string;
  launch_success: boolean;
}

export interface LaunchQuery {
  launch: (flightNumber: number) => LaunchDataInterface;
}

const LAUNCH_QUERY = gql`
  query LaunchQuery($flightNumber: Int!) {
    launch(flight_number: $flightNumber) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

export interface Props {}

export const LaunchDetail: React.FC<Props> = () => {
  const { flightNumber } = useParams();

  const { data } = useQuery<LaunchQuery>(LAUNCH_QUERY, {
    variables: { flightNumber: Number(flightNumber) }
  });

  return (
    <div>
      Flight Number: {flightNumber}
      <br />
      {JSON.stringify(data)}
    </div>
  );
};
