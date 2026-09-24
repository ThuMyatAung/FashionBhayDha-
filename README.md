# Fashion Language Studio — V0.1

This is the first working foundation for the fashion web app described in the project brief.

## Included now
- 31 supplied GLB body models wired into a normalized body profile database.
- Asian / Caucasian / African filters.
- Male / Female and age filters.
- Three.js GLB viewer with orbit, front/side/back/reset controls.
- Mono-color viewing mode for faster visual inspection.
- Body measurement inputs (height, shoulder, chest, waist, hip, arm, leg).
- First garment data model: Crew Neck T-Shirt with actual garment measurements, fabric/GSM, fit, formality and vibes.
- First fitting calculation: body chest → garment chest → ease → fit reading.
- Initial fashion rule engine scaffold for Level ±1 compatibility.

## Run
```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## GitHub
Push this folder to a GitHub repository. For GitHub Pages, configure the project with a Pages-compatible Vite deployment workflow. Vercel/Netlify can deploy the same project directly.

## Important next stage
The measurement fields are currently the data foundation; they do not yet deform the body mesh. The supplied GLBs are rigged/skinned but do not provide body morph targets, so a real measurement-to-body-shape system needs to be added before garment cloth simulation.

The next garment stage should be a production T-shirt mesh/pattern with body collision and fabric parameters, then sizes S/M/L/XL can be simulated and exported.
