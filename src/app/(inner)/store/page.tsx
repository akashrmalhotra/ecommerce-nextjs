import HeaderOne from "@/components/header/HeaderOne";
import StoreBanner from "@/components/banner/StoreBanner";
import StoreLocation from "@/components/common/StoreLocation";
import ShortService from "@/components/service/ShortService";





import FooterOne from "@/components/footer/FooterOne";

export default function Home() {
    return (
        <div className="demo-one">
            <HeaderOne />
            <StoreBanner />
            <StoreLocation />
            <ShortService/>




            <FooterOne />

        </div>
    );
}
