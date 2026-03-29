
import HeaderFour from "@/components/header/HeaderFour";
import BannerFour from "@/components/banner/BannerFour";
import BlogFour from "@/components/blog/BlogFour";
import FooterOne from "@/components/footer/FooterOne";
import FeatureCategory from '@/components/feature/FeatureCategory';
import BestSellingWrap from '@/components/product/BestSellingWrap';
import FeatureDiscount from "@/components/product/FeatureDiscount";
import LessDiscount from "@/components/product/LessDiscount";
import LessDiscountTwo from "@/components/product/LessDiscountTwo";
import RecentlyAdded from "@/components/product/RecentlyAdded";
import ShortService from "@/components/service/ShortService";


export default function Home() {
  return (
    <div className="index-bg-gray">
      <HeaderFour />
      <BannerFour />
      <FeatureCategory />
      <BestSellingWrap />
      <FeatureDiscount />
      <LessDiscount />
      <LessDiscountTwo />
      <RecentlyAdded />

      <BlogFour />
      <ShortService />
      <FooterOne />

    </div>
  );
}
