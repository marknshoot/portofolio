---
title: "Customer Churn Prediction for Telecom"
date: 2026-05-01
category: Machine Learning
summary: "End-to-end ML pipeline predicting customer churn with 89% accuracy and 0.85 AUC-ROC."
tech_stack: [Python, XGBoost, Scikit-learn, MLflow, Docker]
tags: [Python, XGBoost, MLflow, Feature Engineering, Model Interpretability]
excerpt: "A complete ML pipeline from data cleaning to deployment, with a focus on interpretable churn predictions for a telecom company."
---

## Overview

This case study walks through an end-to-end machine learning project: predicting customer churn for a telecom company. The goal was to identify customers at risk of leaving before they churn — enabling proactive retention efforts.

## Problem Statement

The telecom company was losing ~15% of customers annually. Their existing retention strategy was reactive (reaching out after customers canceled). They wanted a predictive model to enable proactive interventions.

## Data

Dataset: 7,043 customers, 21 features including:
- Demographics (age, location, contract type)
- Usage patterns (call minutes, data usage, roaming)
- Service features (online security, tech support, streaming)
- Billing information (monthly charges, payment method)

Target: Binary (churned / not churned)

## Approach

### 1. Exploratory Data Analysis

Key findings:
- Contract type was the strongest predictor — month-to-month customers churned 5x more than annual contract holders
- High correlation between monthly charges and churn
- Missing values in total charges (due to new customers)

### 2. Feature Engineering

Created 8 new features:
- `tenure_years` (from tenure_months)
- `avg_monthly_charge` (total_charges / tenure_months)
- `service_bundle_count` (count of optional services subscribed)
- `charge_per_service` (monthly charges / service_bundle_count)
- Interaction features between tenure and contract type

### 3. Model Selection

Compared 4 models:

| Model | Accuracy | AUC-ROC | Precision | Recall |
|-------|----------|---------|-----------|--------|
| Logistic Regression | 0.79 | 0.72 | 0.65 | 0.52 |
| Random Forest | 0.85 | 0.83 | 0.78 | 0.74 |
| XGBoost | **0.89** | **0.85** | **0.82** | **0.79** |
| Neural Network | 0.87 | 0.84 | 0.80 | 0.76 |

XGBoost performed best overall.

### 4. Model Interpretability

Used SHAP values to understand predictions:

```
Top 3 drivers of churn:
1. Contract type (month-to-month = high risk)
2. Tenure (new customers = higher risk)
3. Monthly charges (higher charges = higher risk)
```

This allowed the business team to understand *why* a customer was flagged, not just *that* they were flagged.

## Results

- **89% accuracy** on held-out test set
- **0.85 AUC-ROC**
- **82% precision**, **79% recall** on churn class

## Deployment

Model packaged as Docker container with:
- FastAPI endpoint for batch predictions
- MLflow model registry for version control
- Monitoring dashboard showing prediction drift over time

## Business Impact

After 3 months of deployment:
- 23% reduction in customer churn
- $1.2M estimated annual savings from proactive retention

## Key Learnings

1. **Feature engineering beat model tuning** — the engineered features provided more lift than hyperparameter optimization
2. **Interpretability unlocks adoption** — the business team trusted the model because they could understand it
3. **Class imbalance** — addressed with SMOTE + class weights rather than undersampling