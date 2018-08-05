const iconSize = '64';

/**
 * Maps the response from foursquare to something more useful to save in state.
 * Grabs icons from first hit, presumes it is most relevant.
 * @param Array foursquareResponse
 */
export default foursquareResponse => {
  return foursquareResponse.map(item => {
    return {
      id: item.id,
      name: item.name,
      address: item.location.formattedAddress,
      icon: {
        name: item.categories[0].pluralName,
        url: `${item.categories[0].icon.prefix}bg_${iconSize}${item.categories[0].icon.suffix}`
      }
    };
  });
};
