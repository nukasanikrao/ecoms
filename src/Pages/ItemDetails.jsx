import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSigleProduct,
  selectSingleProductDetails,
  selectSingleProductError,
  selectSingleProductStatus,
} from "../Redux/Slice/ProductSlice";

export default function ItemDetails() {
  let { id } = useParams();

  const status = useSelector(selectSingleProductStatus);
  const product = useSelector(selectSingleProductDetails);
  const error = useSelector(selectSingleProductError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSigleProduct(id));
  }, [dispatch]);

  useEffect(() => {
    console.log("Product", product);
  }, [product]);

  if (status === "loading") {
    return <h2>Loading</h2>;
  } else if (status === "failed") {
    return <h2> Error {error}</h2>;
  }

  return (
    <>
      <div>ItemDetails Id: {id}</div>
      <div>
        <Card style={{ margin: "5px" }}>
          <CardMedia
            sx={{ height: 400 }}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">Add to Cart</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
