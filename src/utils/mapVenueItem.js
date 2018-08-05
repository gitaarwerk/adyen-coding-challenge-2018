const photoSize = '500x500';

export default venue => {
  return {
    name: venue.name,
    id: venue.id,
    phone: venue.contact.phone,
    price: venue.price.message,
    likes: venue.likes.count,
    photo: venue.bestPhoto && `${venue.bestPhoto.prefix}${photoSize}${venue.bestPhoto.suffix}`,
    location: { latitude: venue.location.lat, longitude: venue.location.lng }
  };
};
