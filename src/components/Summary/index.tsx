import { Container } from "./styles";
import { useContext } from "react";
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";
export function Summary() {

    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type == 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;

        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={OutcomeImg} alt="" />
                </header>
                <strong> - {new Intl.NumberFormat('pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(  summary.withdraws)}</strong>
            </div>
            <div className={summary.total == 0 ? "empty" :(summary.total > 0 ? "positive" : "negative")}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}</strong>
            </div>
        </Container>
    );
}