import { Switch, Route } from "wouter";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Home from "./pages/home";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import ChildSafety from "./pages/child-safety";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/terms" component={Terms}/>
      <Route path="/privacy" component={Privacy}/>
      <Route path="/child-safety" component={ChildSafety}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
  );
}

export default App;
