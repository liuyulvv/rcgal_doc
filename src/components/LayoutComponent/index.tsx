import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function LayoutComponent({ children }) {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout title={`${siteConfig.tagline}`} description={`${siteConfig.title}`}>
            {children}
        </Layout>
    );
}
