import React, { useEffect, useState } from "react";
import css from "./ProductSubCategories.module.css";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Heading from "../../components/Heading/Heading";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import baseUrl from "../../data/url.json";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import CustomButton from "../../components/Buttons/Buttons";

function ProductSubCategories() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const module = await import(
          `../../data/products/categories/${id}.json`
        );
        setData(module.default);
      } catch (err) {
        setError("Product not found.");
        console.error(err);
      }
    };
    loadProduct();
  }, [id]);

  const handleRedirectToProduct = (url) => {
    if (url !== undefined) {
      navigate(`${location.pathname}/${url}`);
    }
  };

  if (error) return <Error message={error} />;
  // if (!data) return <Loading />;

  return (
    <MainContainer>
      <Breadcrumbs />
      <Section label={data?.label}>
        <WrapperContainer className={css.wrapper}>
          <Heading className={css.heading} level="1">
            {data?.heading}
          </Heading>
          {data?.["sub-heading"] && (
            <p className={css.desc}>{data?.["sub-heading"]}</p>
          )}
          <div className={css.gridWrapper}>
            <div className={css.filters}>
              <span>{`${data?.products?.length ?? 0} products`}</span>
            </div>
            <div className={css.gridContainer}>
              {!data?.products?.length ? (
                <Heading level="2">No Products</Heading>
              ) : (
                data.products.map((e) => (
                  <div
                    onClick={() => handleRedirectToProduct(e?.url)}
                    className={css.card}
                    key={e.id}
                  >
                    <div className={css.imgCont}>
                      <img
                        src={`${baseUrl.supabase_url}/${e.cover_img}`}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className={css.details}>
                      <Heading level="3">{e?.name}</Heading>
                      <span>{`\u20B9${e?.price?.original}`}</span>
                      {e?.price?.compared && (
                        <span
                          className={css.comparedP}
                        >{`\u20B9${e?.price?.compared}`}</span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default ProductSubCategories;
