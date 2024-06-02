---
date: '9'
title: 'Multimodal harmful meme detection'
cover: './prize-competition.jpg'
external: 'https://ospc.aisingapore.org/'

tech:
  - Multimodal LLMs
  - Synthetic data
showInProjects: true
---

I won second place in an international competition to detect harmful content in multimodal and multilingual memes. The competition is done in a zero-shot fashion, with no training or validation data released. I built a reusable pipeline that can robustly evaluate memes in under 2 seconds, and a QLoRA fine-tuned LLM, trained on a synthetically generated dataset, with BLIP captioning and multilingual OCR. Competition report is forthcoming in ACM Web Conference 2024 proceedings.
