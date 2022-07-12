import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCountryByName } from "../../Store/Actions/CountriesActions";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import CountryInfo from "./CountryInfo";
import Loading from "../../Loading/Loading";

function CountryDetail(props) {
  const themeContext = useContext(ThemeContext);
  const slug = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryByName(slug.countryName));
  }, [slug.countryName, dispatch]);

  const country = useSelector((state) => state.Countries.country);
  const loading = useSelector((state) => state.Countries.loading);
  return (
    <Wrapper>
      <div
        className={`goBack-btn ${themeContext.theme}`}
        onClick={() => navigate(-1)}
      >
        Go back
      </div>
      {loading ? (
        <Loading />
      ) : (
        <CountryContainer>
          <div className="flagCountry">
            <img
              src={
                country
                  ? country.flag
                  : "https://c.wallhere.com/photos/d8/ee/1920x1080_px_computer_Loading-533823.jpg!s"
              }
              alt=""
            />
          </div>
          <CountryInfo />
        </CountryContainer>
      )}
    </Wrapper>
  );
}

export default CountryDetail;

const Wrapper = styled.div`
  padding-top: 20px;

  .goBack-btn {
    display: block;
    width: 80px;
    height: 28px;
    line-height: 28px;
    padding: 2px 4px;
    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    filter: brightness(0.9);
    transition: all linear 0.2s;

    &:hover {
      filter: brightness(1);
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }
  }
`;

const CountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  .flagCountry {
    max-width: 400px;
    width: 100%;
    height: 100%;
    margin-bottom: 12px;
    box-shadow: var(--BoxShadow);
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
