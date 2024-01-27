import { defer } from "react-router-dom";
import ListingPage from "./ListingPage";

export async function loader({ params }) {
  const listingPromise = new Promise(function (resolve, reject) {
    setTimeout(async () => {
      resolve((await import("../../faker/listing.json")).default.cars);
    }, 5000);
  });

  return defer({
    listings: listingPromise,
  });
}

export default ListingPage;
