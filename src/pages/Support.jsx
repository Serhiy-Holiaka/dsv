import HeroSecondary from '@/components/blocks/hero-secondary';
import TabsPane from '@/components/tabs-pane';
import heroImage from '@/assets/images/support-hero.webp';

const Support = () => {
    return (
        <>
            <HeroSecondary
                imgSrc={heroImage}
                title="Support"
                description="How can we help?"
                breadCrumb="Support"
            />
            <TabsPane />
        </>
    );
};

export default Support;
