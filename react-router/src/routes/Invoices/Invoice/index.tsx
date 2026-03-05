import { useParams } from "react-router-dom";
import { getInvoice } from "../../../data";

export default function Invoice() { 
    const params = useParams();

    const invoice = getInvoice(Number(params.invoiceId));
    return(
        <main style={{ padding: "1rem" }}>
            <h2>Invoice #{invoice?.number}</h2>
            <p>Name: {invoice?.name}</p>
            <p>Amount: {invoice?.amount}</p>
            <p>Due: {invoice?.due}</p>
        </main>
    );
}