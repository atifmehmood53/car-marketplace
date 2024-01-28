const delayTimeout = 1000;
export async function fetchListing() {
  return new Promise(function (resolve, reject) {
    setTimeout(async () => {
      resolve((await import("./listing.json")).default.cars);
    }, delayTimeout);
  });
}

export async function getListingDetails(listingId) {
  return new Promise(function (resolve, reject) {
    setTimeout(async () => {
      const cars = (await import("./listing.json")).default.cars;
      const car = cars.find((car) => parseInt(listingId) === car.id);
      if (car) {
        resolve(car);
      } else {
        reject();
      }
    }, delayTimeout);
  });
}
