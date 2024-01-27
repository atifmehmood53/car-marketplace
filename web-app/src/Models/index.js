export async function fetchListing() {
  return new Promise(function (resolve, reject) {
    setTimeout(async () => {
      resolve((await import("./listing.json")).default.cars);
    }, 5000);
  });
}
