// pages
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import View from "./components/view/View";
import NoWalletPage from "./components/connection/NoWalletPage";
import Connect from "./components/connection/Connect";
import Contact from "./components/contact/Contact";
import Admin from "./components/admin/admin";
import Approval from "./components/institution/instititeAdvanced/approval/approval";
import Privacypolicy from "./components/privacyPolicy/privacypolicy";
import Dashboard from "./components/dashboard/dashboard";
import InstitutesLandingPage from "./components/institution/instititeAdvanced/landingPage/landing";
import Body from "./components/BitWallet/Components/body/body";
import DNFTLandingPage from "./components/dNFT/landingPage/landing";
import { Whitepaper } from "./components/about/whitepaper";
import { Tokenomics } from "./components/about/Tokenomics";
import { Roadmap } from "./components/about/Roadmap";
import { Team } from "./components/about/Team";
// import BitWallet from "./components/BitWallet/Pages/BitWallet"
import Verify from "./components/verify/verify";
import VerifyWithDetails from "./components/verify/verifyWithDetails";
// context
import UserState from "./context/userContext/userState";

// router
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <UserState>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/view" element={<View />} />
            <Route path="/institution" element={<InstitutesLandingPage />} />
            <Route path="/wallet" element={<NoWalletPage />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/:page" element={<Home />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bitwalletpage" element={<Body/>} />
            <Route path="/approval/:orderId/:otp" element={<Approval />} />
            <Route path="/verify" element={<Verify />} />
            <Route
              path="/verify/:contractAddress/:tokenId"
              element={<VerifyWithDetails />}
            />
            <Route path="/dnft" element={<DNFTLandingPage />} />
            <Route path="/whitepapper" element={<Whitepaper/>} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team/>} />
          </Routes>
          <Footer />
        </UserState>
      </HashRouter>
    </>
  );
}

export default App;
