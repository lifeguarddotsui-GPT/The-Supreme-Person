# Kindle File-Size Audit — The Supreme Person

**Audit date:** 2026-09-20  
**ASIN:** B0HJBCDJ74  
**Amazon listing:** https://www.amazon.com/Supreme-Person-Ramzey-Qablawi-ebook/dp/B0HJBCDJ74

## Executive finding

The preserved final production file is:

- **Filename:** `The_Supreme_Person_Complete_Kindle_Edition.epub`
- **Exact size:** **13,549,321 bytes**
- **Decimal size:** **13.55 MB**
- **Binary size:** **12.92 MiB**

A public Amazon detail previously appeared to report **56.9 MB**. That figure could not be independently re-read during this audit because Amazon returned a server error to the public fetch. It therefore remains an **observed but currently unverified listing value**, not a confirmed current value.

If 56.9 MB is still current, it is approximately **4.20 times** the size of the preserved final EPUB.

## What the mismatch could mean

The evidence does not establish one cause. Plausible explanations include:

1. The live title may still contain an older, larger manuscript rather than the compressed final EPUB.
2. Amazon’s converted Kindle delivery package may be larger than the uploaded EPUB, especially for an image-rich book.
3. The public detail may be stale or may represent a different Amazon-generated rendition.
4. The final EPUB may have been prepared after the manuscript currently attached to the live title.

Do not assume which explanation is correct until the current KDP manuscript and Amazon-calculated delivery size are checked inside the existing title record.

## Why the size matters

Amazon’s Digital Book Pricing Page, updated April 21, 2026, states that the 70% royalty calculation subtracts delivery costs. For Amazon.com, the stated delivery rate is **$0.15 per Amazon-determined MB**:

https://kdp.amazon.com/en_US/help/topic/G200634500

Illustrative calculations for a **$9.99** U.S. list price, before taxes or price matching:

| Scenario | Illustrative delivery cost | Illustrative 70% royalty |
|---|---:|---:|
| 13.55 MB | $2.03 | $5.57 |
| 56.9 MB | $8.54 | $1.02 |
| 35% royalty option | No delivery deduction | $3.50 |

These are planning estimates, not KDP sales figures. Amazon determines the billable converted file size and rounds delivery calculations under its current terms. The exact royalty shown by KDP after processing is authoritative.

As of July 7, 2026, Amazon.com’s 70% royalty price band is $2.99–$12.99, so a $9.99 list price remains within that band if all other requirements are met:

https://kdp.amazon.com/en_US/help/topic/G200634560

## Safe verification and replacement procedure

Use the existing Kindle title. Do **not** create a new Kindle edition merely to replace the manuscript.

1. Sign in to KDP and open **Bookshelf**.
2. Find *The Supreme Person* Kindle eBook.
3. Open **…** or **Manage title**, then choose **Edit eBook content**.
4. Before uploading anything, record or screenshot:
   - the current manuscript filename, if shown;
   - the processed download or delivery size;
   - the estimated Amazon.com delivery cost;
   - the current royalty option.
5. Confirm that the replacement file is exactly:
   - `The_Supreme_Person_Complete_Kindle_Edition.epub`
   - 13,549,321 bytes.
6. Upload that EPUB as the manuscript replacement.
7. Wait for KDP to process it, then launch Kindle Previewer.
8. Check the cover, table of contents, all 36 chapters, figures, captions, footnotes, glossary, references and end-of-book links.
9. On the pricing page, record the new Amazon-determined file size, delivery cost and estimated royalty.
10. If the preview and figures are correct, submit the update for publication.
11. Recheck the live Amazon listing after processing.

Amazon’s current timeline says published eBook manuscript updates can take up to **72 hours** to appear, while the updated Read Sample can take **7–8 business days**:

https://kdp.amazon.com/en_US/help/topic/G202173620

## Verification status

- Preserved EPUB metadata and exact byte size: **Verified**
- Internal EPUB archive reinspection during this run: **Not completed** — file materialization returned a transient storage error
- Current Amazon public file-size value: **Not verified**
- Current KDP-processed delivery size: **Unavailable without the authenticated KDP title record**
- Website-to-Amazon click count: **Unavailable because no analytics measurement identifier is configured**

## Decision rule

- If KDP already shows a processed size near 13.55 MB and the preview is correct, do not replace the manuscript solely because of the older public observation.
- If KDP shows a size near 56.9 MB or an older manuscript, replace it with the verified 13,549,321-byte EPUB and recheck the processed royalty estimate before publishing.
- If Amazon converts the 13.55 MB EPUB into a much larger delivery file, inspect the image-heavy chapters and conversion report before compressing further; preserve figure legibility over marginal file-size savings.
