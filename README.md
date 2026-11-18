# THE WORLD IN ONE PICTURE — Tuesday 17 November 2026

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Dhancok007/news-image-20261117-entry/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Dhancok007/news-image-20261117-entry/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

One image that sums up the world's news of **Tuesday 17 November 2026**:

- **America and Iran trade fire** — US jets strike an Iranian missile site on Qeshm Island after Iran's drones hit a US base in Bahrain; tankers hit by mines in the Strait of Hormuz.
- **Crimean Bridge falls into the sea** — Ukrainian drones drop a section of the Kerch Bridge; Russia answers with strikes on Kyiv's bridges.
- **Three presidents, one table** — Trump in Shenzhen for APEC and the first trilateral summit with Xi Jinping and Vladimir Putin.
- **Nvidia's record day** — revenue tops $115 billion; the board will not reinstate ousted CEO Jensen Huang as Washington tightens AI chip curbs on China.
- **1,000 prisoners to go home** — a mass Ukraine–Russia POW exchange announced after the Abu Dhabi talks.
- Also today: Gaza crossings urged open, Houthis advance on Aden, Ebola passes 11,000 cases in Congo, France strikes nationwide.

## How it is built

`poster.html` is the poster (headlines, decks and two hand-drawn SVG scenes: a Strait of Hormuz map and the broken Kerch Bridge). It was rendered once to `entry.png` (1024×1024 PNG) with a headless browser. `main.ts` (Node 22, standard library only) checks the image against the competition's limits and copies it to `/output/entry.png`, byte for byte, on every run.

Run it locally:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
