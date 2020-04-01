import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { State, LaunchesActions } from '../../store';

type LaunchesData = {
  flight_number: string;
  mission_name: string;
  launch_year: string;
  launch_date_local: string;
  launch_success: string;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
  };
};

type LaunchesQuery = {
  launches: LaunchesData[];
};

const LAUNCHERS_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export const Launches: React.FC = () => {
  const { data } = useQuery<LaunchesQuery>(LAUNCHERS_QUERY);
  const { launches = [] } = data || {};

  const l = useSelector<State>(state => state.launches);
  const dispatch: (launches: LaunchesActions) => void = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_LAUNCHES' });
  }, [dispatch]);

  console.log(l);

  return (
    <div>
      {launches.map(launchesData => (
        <Link
          to={{ pathname: `/launch-detail/${launchesData.flight_number}` }}
          key={launchesData.flight_number + launchesData.launch_date_local}
        >
          {JSON.stringify(launchesData, null, 2)}
          <br />
          <hr />
          <br />
        </Link>
      ))}
    </div>
  );
};
