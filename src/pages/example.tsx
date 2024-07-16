import ExampleComponent from "@site/src/components/ExampleComponent";
import LayoutComponent from "@site/src/components/LayoutComponent";

export default function Example(): JSX.Element {
    return (
        <LayoutComponent>
            <ExampleComponent />
        </LayoutComponent>
    );
}
