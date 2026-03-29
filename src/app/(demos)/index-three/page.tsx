import BannerThree from "@/components/banner/BannerThree";
import HeaderThree from "@/components/header/HeaderThree";
import BuyingProcess from "@/components/process/BuyingProcess";
import FeatureCategory from "@/components/category/FeatureCategory";
import CategoryTop from "@/components/category/CategoryTop";
import PopularProduct from "@/components/product/PopularProduct";
import WeeklySellThree from "@/components/product/WeeklySellThree";
import WeeklySellFour from "@/components/product/WeeklySellFour";
import FooterTwo from "@/components/footer/FooterTwo";
import BlogThree from "@/components/blog/BlogThree";


export default function Home() {
    return (
        <div className="demo-one">
            <HeaderThree />
            <BuyingProcess />
            <BannerThree />
            <FeatureCategory />
            <CategoryTop />
            <PopularProduct />

            <WeeklySellThree />

            <WeeklySellFour />

            <BlogThree />
            <FooterTwo />

        </div>
    );
}
