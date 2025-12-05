# TestZeroHeight — Zeroheight base structure

This repository contains a minimal base structure to connect your Figma designs to Zeroheight.

Structure created:
- .zeroheight/config.json — zeroheight config with placeholders
- tokens/colors.json — example design tokens (colors)
- components/button.md — example component page with frontmatter for Figma node linking

Quick setup
1. Create (or open) a styleguide in Zeroheight.
2. Obtain your Zeroheight API key and set it as an environment variable:
   - export ZEROHEIGHT_API_KEY="your_api_key_here"
3. Replace placeholders in `.zeroheight/config.json`:
   - `styleguideId`: your Zeroheight styleguide id
   - `figma.fileId`: your Figma file ID
4. Add additional token files to `tokens/` and component pages to `components/`.
5. For component pages, put the Figma nodeId (frame/node) into the frontmatter (`figmaNodeId`) so the Zeroheight plugin or CLI can map content.
6. Use Zeroheight's plugin/CLI or API to import or reference these files into your Zeroheight project as appropriate.

Notes
- Keep secrets (API keys) out of repo. Use environment variables or a secrets manager.
- This is a minimal starting point; expand tokens and component pages to reflect your design system.
