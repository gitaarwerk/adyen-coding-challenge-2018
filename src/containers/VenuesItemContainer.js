import { connect } from 'react-redux';
import VenueItem from '../components/VenueItem';
import * as actions from '../actionCreators/actionCreators';

const mergeProps = (stateProps, dispatchProps) => {
  const { venueItemPaneIsOpen, isLoadingVenueItem, venueItem } = stateProps;
  const { closeVenuePanel } = dispatchProps;

  return {
    isOpen: !isLoadingVenueItem && venueItemPaneIsOpen,
    handleClose: closeVenuePanel,
    venueItem
  };
};

function mapStateToProps({ venueItemPaneIsOpen, isLoadingVenueItem, venueItem }) {
  return {
    venueItemPaneIsOpen,
    isLoadingVenueItem,
    venueItem
  };
}

export default connect(
  mapStateToProps,
  actions,
  mergeProps
)(VenueItem);
