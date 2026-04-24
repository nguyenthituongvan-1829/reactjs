import Banner from "../components/Banner";
import ShowSPKM, { ShowSPBC, ShowSPH } from "../components/ShowProduct";


export default function index() {

    return (
        <>
            <Banner />
            <ShowSPKM></ShowSPKM>
            <ShowSPBC></ShowSPBC>
            <ShowSPH></ShowSPH>
        </>
    )
}
