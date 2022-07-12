import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import styles from "./Countryinfo.module.scss";
import ScrollBar from "react-perfect-scrollbar";

function CountryInfo(props) {
  const themeContext = useContext(ThemeContext);
  const country = useSelector((state) => state.Countries.country);
  return (
    <ScrollBar style={{ maxHeight: "70vh", overflow: "hidden" }}>
      <div className={styles.countryInfo}>
        {country && (
          <>
            <h3 className={styles.countryName}>{country.name}</h3>
            <table>
              <tbody>
                <tr>
                  <td className={styles.countryInfo__title}>Native Name</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.nativeName}
                  </td>
                </tr>
                <tr>
                  <td className={styles.countryInfo__title}>Official</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.altSpellings}
                  </td>
                </tr>
                <tr>
                  <td className={styles.countryInfo__title}>Population</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {new Intl.NumberFormat().format(country.population)}
                  </td>
                </tr>
                <tr>
                  <td className={styles.countryInfo__title}>Region</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.region}
                  </td>
                </tr>
                <tr>
                  <td className={styles.countryInfo__title}>Sub Region</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.subregion}
                  </td>
                </tr>
                <tr>
                  <td className={styles.countryInfo__title}>Capital</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.capital}
                  </td>
                </tr>
                <tr>
                  <td className={styles.countryInfo__title}>
                    Top Level Domain
                  </td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.topLevelDomain}
                  </td>
                </tr>
                <tr>
                  <td className={styles.countryInfo__title}>Currencies</td>
                  <td>:</td>
                  <td
                    className={styles.countryInfo__value}
                  >{`${country.currencies[0].code} - ${country.currencies[0].name}`}</td>
                </tr>
                <tr>
                  <td className={styles.countryInfo__title}>
                    Border Countries
                  </td>
                  <td>:</td>
                  <td className={styles.borderList}>
                    <div
                      className={clsx(styles.borderItem, themeContext.theme)}
                    >
                      China
                    </div>
                    <div
                      className={clsx(styles.borderItem, themeContext.theme)}
                    >
                      India
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </ScrollBar>
  );
}

export default CountryInfo;
