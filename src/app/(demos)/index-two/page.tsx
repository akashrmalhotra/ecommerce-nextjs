
import BannerTwo from "@/components/banner/BannerTwo";
import HeaderTwo from "@/components/header/HeaderTwo";
import CategoryOne from "@/components/category/CategoryOne";
import FeatureTwo from "@/components/feature/FeatureTwo";
import WeeklyBestSellingTwo from "@/components/product/WeeklyBestSellingTwo";
import MethodOne from "@/components/common/MethodOne";
import OfferAdd from "@/components/common/OfferAdd";
import DealOfDay from "@/components/product/DealOfDay";
import FeaturesGrid from "@/components/product/FeaturesGrid";
import BlogTwo from "@/components/blog/BlogTwo";
import FooterTwo from "@/components/footer/FooterTwo";


export default function Home() {
  return (
    <div className="demo-one">
      <HeaderTwo />
      <BannerTwo />
      <CategoryOne />
      <FeatureTwo />
      <WeeklyBestSellingTwo />
      <MethodOne />
      <DealOfDay />
      <OfferAdd />
      <FeaturesGrid />
      <BlogTwo />
      <FooterTwo />
    </div>
  );
}
