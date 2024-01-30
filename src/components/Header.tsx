'use client';
import useIsMobileScreen from '@/hooks/useIsMobile';
import HeaderDesktop from '@/components/HeaderDesktop';
import HeaderMobile from '@/components/HeaderMobile';


const Header = () => {
  const isMobile = useIsMobileScreen();

  if (isMobile) {
    return <HeaderMobile />;
  }

  return <HeaderDesktop />;

  return (
    <header>
      
    </header>
  );
};

export default Header;
