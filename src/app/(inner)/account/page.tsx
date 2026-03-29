"use client"
import HeaderOne from "@/components/header/HeaderOne";
import ShortService from "@/components/service/ShortService";
import Accordion from "./Accordion";
import FooterOne from "@/components/footer/FooterOne";

export default function Home() {
    return (
        <div className="demo-one">
            <HeaderOne />

            <>
                


            <Accordion/>

                
                
            </>

            <ShortService />
            <FooterOne />
        </div>
    );
}
