import { ComponentProps } from "react";
import { Table } from "react-bootstrap";
import CryptoCurrencyRow, {
  CryptoCurrencyHeaderRow,
} from "./CryptoCurrencyRow";

type Props = {
  items: ComponentProps<typeof CryptoCurrencyRow>[];
};

function CryptoCurrencyTable({ items }: Props) {
  return (
    <Table striped bordered hover>
      <thead>
        <CryptoCurrencyHeaderRow />
      </thead>
      <tbody>
        {items.map((item) => (
          <CryptoCurrencyRow {...item} key={item.name} />
        ))}
      </tbody>
    </Table>
  );
}

export default CryptoCurrencyTable;
