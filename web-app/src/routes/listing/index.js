import { defer } from "react-router-dom";
import ListingPage from "./ListingPage";
import { fetchListing } from "../../model";

export async function loader({ params }) {
  const listingPromise = fetchListing();

  return defer({
    listings: listingPromise,
  });
}

export default ListingPage;
