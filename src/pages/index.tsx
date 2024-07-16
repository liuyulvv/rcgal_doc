import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHeader from "@site/src/components/HomepageHeader";
import LayoutComponent from "@site/src/components/LayoutComponent";

export default function Home(): JSX.Element {
    return (
        <LayoutComponent>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </LayoutComponent>
    );
}
