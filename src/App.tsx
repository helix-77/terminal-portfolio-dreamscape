import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Upcoming from "./pages/Upcoming";
import { Analytics } from "@vercel/analytics/react"


const App = () => (
  <BrowserRouter>
    <Analytics />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/upcoming" element={<Upcoming />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
