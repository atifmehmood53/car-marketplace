import React from "react";
import { Await, useLoaderData } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import ListingLoader from "../../components/ListingLoader";
import ListingCard from "../../components/ListingCard";

export default function ListingPage() {
  const { listings } = useLoaderData();

  return (
    <SimpleGrid minChildWidth="400px" spacing={8}>
      <React.Suspense
        fallback={
          <>
            <ListingLoader></ListingLoader>
            <ListingLoader></ListingLoader>
            <ListingLoader></ListingLoader>
            <ListingLoader></ListingLoader>
            <ListingLoader></ListingLoader>
            <ListingLoader></ListingLoader>
          </>
        }
      >
        <Await
          resolve={listings}
          errorElement={<div>Could not load reviews 😬</div>}
        >
          {(data) => {
            return data.map((car) => (
              <ListingCard key={car.id} carDetails={car} />
            ));
          }}
        </Await>
      </React.Suspense>
    </SimpleGrid>
  );
}
