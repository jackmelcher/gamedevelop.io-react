/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// https://www.joshwcomeau.com/react/dark-mode/
import React from 'react';

const MagicScriptTag = () => {
  let codeToRunOnClient = `
    (function() {
        function getInitialColorMode() {
            const persistedColorPreference =
                window.localStorage.getItem('site-theme');
            const hasPersistedPreference =
                typeof persistedColorPreference === 'string';
            // If the user has explicitly chosen light or dark,
            // let's use it. Otherwise, this value will be null.
            if (hasPersistedPreference) {
                return persistedColorPreference;
            }
            // If they haven't been explicit, let's check the media query
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            const hasMediaQueryPreference = typeof mql.matches === 'boolean';
            if (hasMediaQueryPreference) {
                return mql.matches ? 'dark' : 'light';
            }
            // If they are using a browser/OS that doesn't support
            // color themes, let's default to 'light'.
            return 'light';
        }
            
        const colorMode = getInitialColorMode();

        const htmlTag = document.getElementsByTagName("html")[0];
        if (colorMode === "dark") {
            htmlTag.setAttribute("data-theme", "dark");
            localStorage.setItem("site-theme", "dark");
        }
        else {
            htmlTag.removeAttribute("data-theme");
            localStorage.setItem("site-theme", "light");
        }
    })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};