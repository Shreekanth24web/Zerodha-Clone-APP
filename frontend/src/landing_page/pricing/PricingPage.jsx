import Brokerage from "./Brokerage";
import Charges from "./Charges";
import ChargesTable from "./ChargesTables/ChargesTable";
import Hero from "./Hero"; 
function PricingPage() {
    return (
        <div>
            <Hero />
            <Brokerage />
            <ChargesTable />
            <Charges />
        </div>
    );
}

export default PricingPage;