import dynamic from "next/dynamic";
import React, { type PropsWithChildren } from "react";
const NonSSRWrapper = (props: PropsWithChildren<object>) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export const NoSSRWrapper = dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
