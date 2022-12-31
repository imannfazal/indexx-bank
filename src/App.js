import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mypage from "./components/Mypage";
import Borrow from "./components/Borrow";
import Farm from "./components/Farm";
import Withdraw from "./components/Withdraw";
import Repay from "./components/Repay";
import Invest from "./components/Invest";
import BorrowAwait from "./components/BorrowAwait";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/indexx-bank/MyPage" element={<Mypage />} />
          <Route path="/indexx-bank/Borrow" element={<Borrow />} />
          <Route path="/indexx-bank/Farm" element={<Farm />} />
          <Route path="/indexx-bank/Invest" element={<Invest />} />
          <Route path="/index-bank/Invest/Withdraw-Crypto" element={<Withdraw />} />
          <Route path="/indexx-bank/Borrow/Repay" element={<Repay />} />
          <Route path="/indexx-bank/Borrow/Await" element={<BorrowAwait />} />
          <Route path="/indexx-bank/Invest/Await" element={<BorrowAwait />} />
          
        </Routes>

      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
