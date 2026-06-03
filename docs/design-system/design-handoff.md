# Design Handoff

## Purpose

This file explains how to move from the design-system docs to Figma or Google Stitch, and then from there into code.

## Phase order

1. use this design-system package as source of truth
2. create Figma or Stitch exploration using these tokens and patterns
3. freeze approved visual decisions
4. translate approved visuals into frontend implementation

## What Figma or Stitch should inherit

- official palette hierarchy
- typography hierarchy intent
- spacing and layout rhythm
- page patterns
- CTA structure
- trust-first visual hierarchy

## What Figma or Stitch should not reinvent

- primary brand colors
- basic support-path structure
- transparency layout logic
- unresolved factual content

## Handoff from design to code

When final visuals are approved, the handoff should include:

- updated token mapping if refined
- page-by-page section composition
- states for buttons, forms, and interactive choices
- mobile and desktop behavior
- image crop and usage notes

## Implementation expectation

Frontend implementation should map:

- JSON/CSS tokens into the chosen code stack
- patterns into reusable components
- page sections into CMS-driven blocks where appropriate

## Governance rule

If final Figma/Stitch decisions conflict with the current docs, update the docs before or alongside code implementation so future agents do not work from stale guidance.
