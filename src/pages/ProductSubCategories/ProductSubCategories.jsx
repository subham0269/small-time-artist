import React, { useEffect, useState } from "react";
import css from "./ProductSubCategories.module.css";
import { Helmet } from "react-helmet";
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

  // Products that should show custom pricing message instead of regular price
  const productsWithCustomMessage = [
    "story-walls-gogh",
    "keepsake-boxes-gogh",
    "painted-keepsakes-gogh",
    "love-and-latte-coasters",
  ];

  if (error) return <Error message={error} />;
  // if (!data) return <Loading />;

  return (
    <MainContainer>
      <Helmet>
        <title>{`${data?.heading || "Products"} - Small Time Artist`}</title>
        <meta
          name="description"
          content={
            data?.["sub-heading"]?.replace(/<[^>]*>/g, "") ||
            "Browse our collection of handcrafted products."
          }
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${data?.heading || "Products"} - Small Time Artist`}
        />
        <meta
          property="og:description"
          content={
            data?.["sub-heading"]?.replace(/<[^>]*>/g, "") ||
            "Browse our collection of handcrafted products."
          }
        />
        {data?.products?.[0]?.cover_img && (
          <meta
            property="og:image"
            content={`${baseUrl.supabase_url}/${data.products[0].cover_img}`}
          />
        )}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${data?.heading || "Products"} - Small Time Artist`}
        />
        <meta
          name="twitter:description"
          content={
            data?.["sub-heading"]?.replace(/<[^>]*>/g, "") ||
            "Browse our collection of handcrafted products."
          }
        />
        {data?.products?.[0]?.cover_img && (
          <meta
            name="twitter:image"
            content={`${baseUrl.supabase_url}/${data.products[0].cover_img}`}
          />
        )}
      </Helmet>
      <Breadcrumbs />
      <Section label={data?.label}>
        <WrapperContainer className={css.wrapper}>
          <Heading className={css.heading} level="1">
            {data?.heading}
          </Heading>
          {data?.["sub-heading"] && (
            <p
              className={css.desc}
              dangerouslySetInnerHTML={{ __html: data?.["sub-heading"] }}
            />
          )}
          {data?.comingSoon ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <Heading level="2" style={{ marginBottom: "1rem" }}>
                Coming Soon
              </Heading>
              <p style={{ fontSize: "1rem", color: "#666" }}>
                We're working on something special. Stay tuned!
              </p>
            </div>
          ) : (
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
                        {productsWithCustomMessage.includes(e?.url) ? (
                          <p
                            style={{
                              fontSize: "0.9rem",
                              fontStyle: "italic",
                              color: "#666",
                            }}
                          >
                            Prices vary based on customization
                          </p>
                        ) : (
                          e?.price?.map((_) => (
                            <p>
                              <span>{`Rs. ${_?.original}${_?.showAbove ? " & above" : ""}`}</span>
                              {_?.excl && (
                                <span
                                  className={css.excl}
                                >{` + ${_?.excl}`}</span>
                              )}
                              {_?.incl && (
                                <span
                                  className={css.incl}
                                >{`- ${_?.incl}`}</span>
                              )}
                            </p>
                          ))
                        )}
                        {/* <p>
                          <span>{`\u20B9${_?.original}`}</span>
                          {_?.compared && (
                            <span
                              className={css.comparedP}
                            >{`\u20B9${_?.compared}`}</span>
                          )}
                          {_?.excl && (
                            <span className={css.excl}>{` + ${_?.excl}`}</span>
                          )}
                          {_?.incl && (
                            <span className={css.incl}>{`- ${_?.incl}`}</span>
                          )}
                        </p> */}
                        {/* <span>{`\u20B9${e?.price?.original}`}</span>
                      {e?.price?.compared && (
                        <span
                          className={css.comparedP}
                        >{`\u20B9${e?.price?.compared}`}</span>
                      )} */}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default ProductSubCategories;
