const invoices = [
  { 
    id: 1, 
    name: "Acme Adapters", 
    number: 1995,
    amount: "$100.00", 
    due: "2020-08-01" },

  { 
    id: 2, 
    name: "Widget Co", 
    number: 1996,
    amount: "$200.00", 
    due: "2020-08-05" },

    {
    id: 3, 
    name: "Another Co", 
    number: 1997,
    amount: "$300.00", 
    due: "2020-08-10" },

    {
    id: 4, 
    name: "Company Inc", 
    number: 1998,
    amount: "$400.00", 
    due: "2020-08-15" },
];

export function getInvoices() {
  return invoices;
}