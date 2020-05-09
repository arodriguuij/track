import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLoction = (increment) => ({
  timestamp: 10000000,
  coords: {
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitudeAccuracy: 5,
    altitude: 5,
    longitude: -5.54064 + increment * tenMetersWithDegrees,
    latitude: 39.89158 + increment * tenMetersWithDegrees,
  },
});

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLoction(counter),
  });
  counter++;
}, 1000);
