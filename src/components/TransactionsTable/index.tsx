import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
export function TransactionsTable(){
    useEffect(() => {
        api.get("transactions")
        .then(response => console.log(response.data))

    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Almoço de final de semana</td>
                        <td className="deposit">R$ 120,00</td>
                        <td>Almoço</td>
                        <td>04/06/2020</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 120,00</td>
                        <td>Almoço</td>
                        <td>04/06/2020</td>
                </tr>
                </tbody>
            </table>
        </Container>
    );
}