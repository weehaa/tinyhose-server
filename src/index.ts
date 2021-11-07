import express from "express";
import { listings } from "./listing";

const app = express();
const port = 9000;

app.use(express.json());

app.get("/listings", (_req, res) => {
  return res.send(listings);
});

app.post("/delete-listing", (req, res) => {
  const id: string = req.body.id;

  for (const listing of listings) {
    if (listing.id === id) {
      return res.send(listings.splice(listings.indexOf(listing), 1));
    }
  }

  return res.send("failed to delete listing\n");
});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
