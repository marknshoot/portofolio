---
title: "Sentiment Analysis on Indonesian Product Reviews"
date: 2026-05-01
categories: [NLP, Machine Learning]
tags: [Python, Transformers, IndoBERT, FastAPI]
excerpt: "Building a sentiment classifier for Indonesian e-commerce reviews using fine-tuned IndoBERT, deployed as a REST API."
summary: "End-to-end NLP pipeline classifying sentiment in Indonesian product reviews with 91% accuracy using IndoBERT, deployed via FastAPI."
tech_stack: [Python, PyTorch, Transformers, FastAPI, Docker]
category: Machine Learning
---

## Overview

This project builds a sentiment classifier for Indonesian e-commerce product reviews. The goal was to create a model that could accurately classify reviews as positive, negative, or neutral — with a focus on informal Indonesian language commonly found in online marketplaces.

## Problem

Indonesian text classification is challenging because:
- Informal language, slang, and typos are common
- Mix of Indonesian and English
- Limited labeled datasets compared to English

Existing solutions either performed poorly on informal text or were not available for Indonesian.

## Approach

### Data

Used a combination of:
- Bilingual Indonesian-English product reviews (scraped, with permission)
- Manual annotations by 3 reviewers (inter-annotator agreement: 0.87 kappa)

Total dataset: 12,500 reviews, split 80/10/10 train/val/test.

### Model

Fine-tuned **IndoBERT** (bert-base-multilingual-cased) on the Indonesian review dataset.

```python
from transformers import AutoModelForSequenceClassification, Trainer

model = AutoModelForSequenceClassification.from_pretrained(
    "indobenchmark/indobert-base-p1",
    num_labels=3
)
```

### Training

- Epochs: 5
- Batch size: 16
- Learning rate: 2e-5
- Max length: 128 tokens
- Early stopping on validation F1

## Results

| Metric | Score |
|--------|-------|
| Accuracy | 91.2% |
| F1 (weighted) | 0.91 |
| F1 (macro) | 0.89 |

## Deployment

Deployed as a REST API using FastAPI with Docker:

```bash
# Example request
curl -X POST https://api.example.com/predict \
  -H "Content-Type: application/json" \
  -d '{"text": "Produk bagus banget, pengiriman cepat!"}'
```

Response time: ~45ms on CPU, ~12ms on GPU.

## Key Learnings

1. **Data quality matters more than model size** — a smaller model on cleaner data outperformed a larger model on messy data
2. **Informal Indonesian requires specific preprocessing** — keeping emojis and informal spelling improved performance
3. **Class imbalance** — negative reviews were underrepresented; used weighted loss to address this

## Future Work

- Expand to aspect-based sentiment analysis
- Fine-tune on specific e-commerce platforms
- Add support for code-mixed (Indonesian-English) text