# Changelog

All notable changes to this project will be documented in this file.

---

## [v1.1.0] - Google Analytics upgrade

### Added

* Integrated Google Analytics 4 (GA4) tracking across all website pages
* Added global site tracking using Measurement ID: G-J9MRKRB2GG
* Enabled real-time visitor tracking and analytics dashboard

### Changed

* Replaced legacy Universal Analytics (UA) with GA4 (gtag.js)
* Standardized analytics script injection across all HTML pages

### Removed

* Removed deprecated Google Analytics (UA-25681998-1) tracking code
* Removed legacy `ga.js` script references

### Notes

* Analytics now supports modern tracking features (event-based model)
* Realtime reporting available in GA4 dashboard
* No impact to website UI or performance observed

---

## [v1.0.0] - Initial migration to GitHub Pages

### Added

* Added Malaysia branch information (Ming Tai Brick Sdn. Bhd.)
* Added China branch information (Gong Sheng Automatic Machinery Co., Ltd)
* Added Google Maps embed for new branch locations
* Added CNAME configuration for custom domain support

### Changed

* Migrated website hosting from HiHosting to GitHub Pages
* Connected custom domain: gong-sheng.com.tw
* Enabled HTTPS with GitHub Pages
* Updated DNS configuration to point to GitHub infrastructure
* Cleaned legacy hosting dependencies (FrontPage / old configs)

### Fixed

* Removed conflicting DNS records causing GitHub verification issues
* Eliminated obsolete hosting references and inactive links
* Improved compatibility for HTTPS (mixed content adjustments)

### Notes

* Website structure and UI were intentionally preserved (no redesign)
* Contact form functionality using `/cgi-sys/FormMail.cgi` is no longer supported (static hosting limitation)
* Future updates may replace form handling with external services

---

## Versioning Guide

* **v1.0.x** → Minor fixes (text, images, small corrections)
* **v1.1.x** → Feature updates (analytics, integrations)
* **v2.0.0** → Major changes (UI redesign or structural updates)

---

## Deployment Notes

* Hosting: GitHub Pages
* Domain: gong-sheng.com.tw
* Repository: gong-sheng-website
* Deployment: Automatic via main branch

---
