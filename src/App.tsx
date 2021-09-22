import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";
import {TransactionsProvider } from "./hooks/useTransactions";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }
  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModal} 
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}


