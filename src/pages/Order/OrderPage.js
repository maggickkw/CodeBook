import { useLocation } from "react-router-dom";
import { useTitle } from "../../hook/useTitle";
import { OrderFailed } from "./components/OrderFailed";
import { OrderSuccess } from "./components/OrderSucess";

export const OrderPage = () => {
   useTitle("Order Summary")
    const { state } = useLocation();

    return <main>
        { state.status ? <OrderSuccess data={state.data} /> : <OrderFailed /> }
    </main>;
};
