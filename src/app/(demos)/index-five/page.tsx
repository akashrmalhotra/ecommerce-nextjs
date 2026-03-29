
import HeaderFive from "@/components/header/HeaderFive";
import BannerFive from "@/components/banner/BannerFive";
import BlogFive from "@/components/blog/BlogFive";
import FooterThree from "@/components/footer/FooterThree";
import FeatureCategory from '@/components/feature/FeatureCategory';
import BestDiscount from '@/components/product/BestDiscount';
import BestSellingWrap from '@/components/product/BestSellingWrap';
import RecentlyAddedTwo from "@/components/product/RecentlyAddedTwo";
import ShortService from "@/components/service/ShortService";
import BackToTop from "@/components/common/BackToTop";


export default function Home() {
    return (
        <div className="index-five">
            <HeaderFive />
            <BannerFive />
            <FeatureCategory />
            <BestDiscount />





            <BestSellingWrap />










            <RecentlyAddedTwo />
            <BlogFive />



            <ShortService />
            <FooterThree />
            <BackToTop />

        </div>
    );
}
