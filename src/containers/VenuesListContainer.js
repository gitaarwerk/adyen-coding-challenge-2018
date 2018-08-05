import { connect } from 'react-redux';
import VenuesList from '../components/VenuesList';
import * as actions from '../actionCreators/actionCreators';

const mergeProps = (stateProps, dispatchProps) => {
  const { nearbyVenues, isLoading } = stateProps;

  return {
    nearbyVenues,
    isLoading,
    onClickOpenItem: dispatchProps.loadVenueItem
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
  actions,
  mergeProps
)(VenuesList);
