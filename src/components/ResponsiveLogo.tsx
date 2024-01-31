'use client';
import Image from "next/image";
import useIsMobileScreen from "@/hooks/useIsMobileScreen";

const logoSrc = '/images/brand/logo.png';

const ResponsiveLogo = () => {
    const isMobile = useIsMobileScreen();
    const logoSize = isMobile ? 80 : 200;
    return (
        <Image src={logoSrc} alt="ResponsiveLogo" width={logoSize} height={logoSize} />
    );
}
 
export default ResponsiveLogo;