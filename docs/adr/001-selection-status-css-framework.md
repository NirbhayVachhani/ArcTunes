# ADR - Selection Status of CSS Framework
**Status:** Proposed  

## Context
A CSS framework will be necessary to make our ArcTunes mobile app responsive for various screen sizes. This decision will be crucial for maintaining efficiency in the development process and ensuring a high-quality user experience.

## Decision
The CSS framework chosen is Bootstrap.

## Rationale
- **Mobile-First Design:** Bootstrap's mobile-first approach ensures responsive design optimization.
- **React Compatibility:** Bootstrap components integrate well with React, minimizing dependency conflicts.
- **Community and Documentation:** Bootstrap's popularity leads to extensive community support and resources.
- **No jQuery Dependency:** The latest Bootstrap versions eliminate jQuery reliance, utilizing improvements in native JavaScript.

### Pros:
- **Fast Development:** Pre-built components facilitate rapid UI/UX iteration.
- **Coherent Design:** Bootstrap fosters consistent and visually appealing interfaces.

### Challenges:
- **Customization:** Additional styles are needed for Spotify's unique branding.
- **App Size:** Including Bootstrap may increase app size, but selective imports can mitigate this.
