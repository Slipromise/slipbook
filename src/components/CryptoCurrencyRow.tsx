import React from "react";
import Image from "react-bootstrap/esm/Image";
import numeral from "numeral";
import styles from "@/styles/components/CryptoCurrencyRow.module.scss";
import { useSpring, animated } from "@react-spring/web";

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
  const animateValues = useSpring({
    price,
    changeIn1h,
    changeIn24h,
    changeIn1w,
    marketCap,
    volume24h,
    config: {
      duration: 300,
    },
  });

  return (
    <tr className={styles.container}>
      <td data-rank>
        <span>{rank}</span>
      </td>
      <td data-name>
        <Image src={symbolUri} alt="Crypto Currency" />
        <span>{name}</span>
        <span>{symbol}</span>
      </td>
      <td data-price>
        <animated.span>
          {animateValues.price.to((n) =>
            numeral(n).format("$0,0.00", Math.floor)
          )}
        </animated.span>
      </td>
      <td data-changeIn1h>
        <animated.span
          data-positive={changeIn1h > 0}
          data-negative={changeIn1h < 0}
        >
          {animateValues.changeIn1h.to((n) =>
            numeral(n / 100).format("+0.00%", Math.floor)
          )}
        </animated.span>
      </td>
      <td data-changeIn24h>
        <animated.span
          data-positive={changeIn24h > 0}
          data-negative={changeIn24h < 0}
        >
          {animateValues.changeIn24h.to((n) =>
            numeral(n / 100).format("+0.00%", Math.floor)
          )}
        </animated.span>
      </td>
      <td data-changeIn1w>
        <animated.span
          data-positive={changeIn1w > 0}
          data-negative={changeIn1w < 0}
        >
          {animateValues.changeIn1w.to((n) =>
            numeral(n / 100).format("+0.00%", Math.floor)
          )}
        </animated.span>
      </td>
      <td data-marketCap>
        <animated.span>
          {animateValues.marketCap.to((n) =>
            numeral(n / 100).format("$0,0.00a", Math.floor)
          )}
        </animated.span>
      </td>
      <td data-volume24h>
        <animated.span>
          {animateValues.volume24h.to((n) =>
            numeral(n / 100).format("$0,0.00a", Math.floor)
          )}
        </animated.span>
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
