import React from "react";
import Image from "react-bootstrap/esm/Image";
import numeral from "numeral";
import styles from "../styles/components/CryptoCurrencyRow.module.scss";

// TODO: animation

type Props = {
  name: string;
  rank: number;
  symbol: string;
  symbolUri: string;
  pricingUnit: string;
  price: number;
  changeIn1h: number;
  changeIn24h: number;
  changeIn1w: number;
  volume24h: number;
  marketCap: number;
  onSubscribe: () => void;
  onClick: () => void;
};

function CryptoCurrencyRow({
  name,
  rank,
  symbol,
  symbolUri,
  pricingUnit,
  price,
  changeIn1h,
  changeIn24h,
  changeIn1w,
  volume24h,
  marketCap,
  onSubscribe,
  onClick,
}: Props) {
  return (
    <tr className={styles.container}>
      <td data-rank>
        <span>{rank}</span>
      </td>
      <td data-name>
        <Image src={symbolUri} />
        <span>{name}</span>
        <span>{symbol}</span>
      </td>
      <td data-price>
        <span>{numeral(price).format("$0,0.00")}</span>
      </td>
      <td data-changeIn1h>
        <span data-positive={changeIn1h > 0} data-negative={changeIn1h < 0}>
          {numeral(changeIn1h / 100).format("+0.00%")}
        </span>
      </td>
      <td data-changeIn24h>
        <span data-positive={changeIn24h > 0} data-negative={changeIn24h < 0}>
          {numeral(changeIn24h / 100).format("+0.00%")}
        </span>
      </td>
      <td data-changeIn1w>
        <span data-positive={changeIn1w > 0} data-negative={changeIn1w < 0}>
          {numeral(changeIn1w / 100).format("+0.00%")}
        </span>
      </td>
      <td data-marketCap>
        <span>{numeral(marketCap).format("$0,0.00a")}</span>
      </td>
      <td data-volume24h>
        <span>{numeral(volume24h).format("$0,0.00a")}</span>
      </td>
    </tr>
  );
}

export default CryptoCurrencyRow;

export const CryptoCurrencyHeaderRow = () => {
  return (
    <tr>
      <th data-rank>#</th>
      <th data-name>Name</th>
      <th data-price>Price</th>
      <th data-changeIn1h>1h%</th>
      <th data-changeIn24h>24h%</th>
      <th data-changeIn1w>7d%</th>
      <th data-marketCap>Market Cap</th>
      <th data-volume24h>Volume(24h)</th>
    </tr>
  );
};
