import { connect } from 'react-redux';
import VenuesList from '../components/VenuesList';

const mergeProps = stateProps => {
  const { nearbyVenues, isLoading } = stateProps;

  return {
    nearbyVenues,
    isLoading
  };
};

function mapStateToProps({ nearbyVenues, isLoading }) {
  return {
    nearbyVenues,
    isLoading
  };
}

export default connect(
  mapStateToProps,
  {},
  mergeProps
)(VenuesList);
