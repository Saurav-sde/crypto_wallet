import { BrowserRouter, Routes, Route } from "react-router";
import WalletSetup from "./pages/WalletSetup";
import WalletOnboarding from "./pages/WalletOnBoarding";
import ImportWallet from "./pages/ImportWallet";


export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WalletSetup/>}/>
        <Route path="/create-wallet" element={<WalletOnboarding/>}/>
        <Route path="/import-wallet" element={<ImportWallet/>}/>
      </Routes>
    </BrowserRouter>
  )
}