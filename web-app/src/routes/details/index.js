import { defer } from "react-router-dom";
import DetailsPage from "./DetailsPage";
import { getListingDetails } from "../../Models";

export async function loader({ params }) {
  const carDetails = getListingDetails(params.listingId);
  console.log(carDetails);
  return defer({
    carDetails: carDetails,
  });
}

export default DetailsPage;