import { useEffect } from "react";
import { run as runHolder } from "holderjs";

export function withHolder<P = {}>(WrappedComponent: React.ComponentType<P>) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithHolder = (props: P & {}) => {
    useEffect(() => {
      runHolder();
    }, []);

    // props comes afterwards so the can override the default ones.
    return <WrappedComponent {...props} />;
  };

  ComponentWithHolder.displayName = `withHolder(${displayName})`;

  return ComponentWithHolder;
}
