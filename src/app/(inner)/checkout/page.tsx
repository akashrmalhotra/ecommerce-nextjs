import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";
import CheckOutMain from "./CheckOutMain";
import FooterOne from "@/components/footer/FooterOne";

export default function Home() {
    return (
        <div className="demo-one">
            <HeaderOne />


            <CheckOutMain />
            <ShortService />
            <FooterOne />
        </div>
    );
}
