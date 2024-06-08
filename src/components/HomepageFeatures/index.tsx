import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

interface FeatureItem {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    linkUrl: string;
}

const FeatureList2D: FeatureItem[] = [
    {
        title: "Convex Hull",
        Svg: require("@site/static/img/convex_hull.svg").default,
        linkUrl: "/docs/algorithm/convex-hull",
    },
];

const FeatureList3D: FeatureItem[] = [];

function Feature({ title, Svg, linkUrl }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Link to={linkUrl}>{title}</Link>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                {FeatureList2D.length > 0 ? (
                    <div>
                        <div className="text--center padding-horiz--md">
                            <Heading as="h3">2D</Heading>
                        </div>
                        <div className="row">
                            {FeatureList2D.map((props, idx) => (
                                <Feature key={idx} {...props} />
                            ))}
                        </div>
                    </div>
                ) : null}

                {FeatureList3D.length > 0 ? (
                    <div>
                        <div className="text--center padding-horiz--md">
                            <Heading as="h3">3D</Heading>
                        </div>
                        <div className="row">
                            {FeatureList3D.map((props, idx) => (
                                <Feature key={idx} {...props} />
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
