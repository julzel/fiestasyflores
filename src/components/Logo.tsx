import Image from "next/image";

const logoSrc = '/images/brand/logo.png';

const Logo = () => {
    return (
        <Image src={logoSrc} alt="Logo" width={200} height={200} />
    );
}
 
export default Logo;