// automatic pull these type definition when ts compiles
type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};
