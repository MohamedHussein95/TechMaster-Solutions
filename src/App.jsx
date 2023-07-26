import {
  Brand,
  Header,
  Hero,
  Stats,
  Feature,
  Testimonials,
  Subscribe,
  Footer,
} from "./containers";
import "./App.css";

function App() {
  return (
    <div className=".gradient__bg ">
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* brands */}
      <Brand />
      {/* Stats */}
      <Stats />
      {/* Features */}
      <Feature />
      {/* Testimonials */}
      <Testimonials />
      {/* Subscribe Form */}
      <Subscribe />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
