import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProduct,
  selectProductError,
  selectProductList,
  selectProductStatus,
} from "../Redux/Slice/ProductSlice";

export default function Home() {
  const status = useSelector(selectProductStatus);
  const productList = useSelector(selectProductList);
  const error = useSelector(selectProductError);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  if (status === "loading") {
    return <h2>Loading</h2>;
  } else if (status === "failed") {
    return <h2> Error {error}</h2>;
  }

  return (
    <Fragment>
      {productList &&
        productList.map((product) => (
          <div>
            {/* //<h2>{product.title}</h2>
          //   <h2>{product.description}</h2>
          //   <img src={product.image} alt="img" height="200" width="150" /> */}
          </div>
        ))}
      <Grid container columns={12}>
        {productList &&
          productList.map((product) => (
            <Grid xs={4} key={product.id}>
              {/* <h2>{product.title}</h2>
            <h2>{product.description}</h2>
            <img src={product.image} alt="img" height="200" width="150" /> */}
              <Card sx={{ maxWidth: 345 }} style={{ margin: "5px" }}>
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
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/item/${product.id}`)}
                  >
                    More Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
}
