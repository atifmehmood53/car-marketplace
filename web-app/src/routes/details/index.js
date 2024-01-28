import { defer } from "react-router-dom";
import DetailsPage from "./DetailsPage";
import { getListingDetails } from "../../models";

export async function loader({ params }) {
  const carDetails = getListingDetails(params.listingId);
  return defer({
    carDetails: carDetails,
  });
}

export default DetailsPage;
