# PlanWAM Website

This directory contains the anonymous ICLR 2027 project page for:

> PlanWAM: Planning-Shaped Future Representations for End-to-End Autonomous Driving

## Page Structure

- **Overview** introduces the planning-oriented future representation question and highlights the headline results: 93.8 PDMS, 90.9 EPDMS, 38.7 HD-Score, and 53.7 Route Completion.
- **Motivation** explains the progression from future reconstruction to latent prediction and future-conditioned planning, then positions PlanWAM around the question of which future information is useful for planning.
- **Method** presents the Temporal Register Pyramid, the planning-shaped future posterior, Hindsight-to-Foresight Distillation, and Foresight-Conditioned Planning. The section also includes the two-stage training objectives.
- **Experiments** summarizes the NAVSIM-v1, NAVSIM-v2, and HUGSIM protocols and includes the complete main comparison tables and qualitative results. NAVSIM-v1 and HUGSIM are presented as separate vertical result blocks for easier comparison.
- **Ablations** includes component, future-representation, future-latent usage, temporal allocation, and distillation studies. It also shows the failure-reduction analysis.
- **Citation** provides an anonymous BibTeX entry with a copy button.

## Local Entry Points

- `index.html` is the formal project-page entry point.
- `src/iclr2027_conference.pdf` is the local paper link used by the Paper button.
- `https://anonymous.4open.science/r/PlanWAM-DE80/README.md` is the anonymous code link used by the Code button.

## Image Mapping

The page reuses the supplied images under `src/`:

- `微信图片_20260925222507_1055_103.png`: comparison of four future-modeling paradigms.
- `微信图片_20260925222506_1054_103.png`: PlanWAM training and inference overview.
- `微信图片_20260925222502_1051_103.png`: Temporal Register Pyramid.
- `微信图片_20260925222501_1050_103.png`: NAVSIM and HUGSIM qualitative planning results.
- `微信图片_20260925222504_1052_103.png`: failure type comparison and failure-reduction attribution.
- `微信图片_20260925222505_1053_103.png`: duplicate source asset retained in the repository and not used as a separate page figure.

Clicking a figure opens a lightweight enlarged-image viewer. The viewer can be closed with the close button, by clicking the backdrop, or with the Escape key.

## Anonymous Review Notes

The page intentionally uses:

- `Anonymous authors`
- `Under review at ICLR 2027`
- `Paper under double-blind review`

No author names, affiliations, email addresses, DOI, arXiv identifier, or non-anonymous repository URL are included. After acceptance, update the hero author line, status line, Code link, and the BibTeX block in `index.html`.

## Styling and Interaction

- `assets/stylesheets/planwam.css` provides the bright academic visual system, responsive tables, metric blocks, figure layout, and mobile adaptations.
- All comparison and ablation table cells use consistent centered alignment; wide tables scroll within their own containers on small screens.
- `assets/scripts/planwam.js` provides BibTeX copying and image enlargement.
- `assets/scripts/navbar.js` provides the existing Clarity scroll-aware table of contents.

The page is plain static HTML/CSS/JavaScript and does not require a build tool or package installation.
