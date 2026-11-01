// Who runs version.cam, from src/data/entity.json: the one place the provider
// is named. ZEPT 5. člen wants a provider's firma, seat, e-mail address,
// register and registration number, and its VAT identification if it has
// one, easy to find on the service; GDPR Art 13(1)(a) wants the same
// identity as the controller at the top of the privacy policy. Provider.astro
// prints them from here on every legal page, and scripts/check-entity.mjs
// fails the build if the firma or the street is spelled anywhere else in
// src/, so the pages cannot drift from the record when the company changes
// (an s.p. that becomes a d.o.o. is a change to the JSON, and the pages
// follow). The hosted service has a twin of these facts for its own pages
// and its e-mail footers; the two change together.
import entity from '../data/entity.json';

export { entity };

/** The registered office on one line, as an envelope would carry it. */
export const addressLine = `${entity.street}, ${entity.postalCode} ${entity.city}, ${entity.country}`;

/**
 * The provider in one sentence, for a footer or a signature. The VAT number
 * never travels bare: to a Slovenian reader a bare ID za DDV says "charges
 * VAT", and this provider does not on supplies at home.
 */
export function identityLine(): string {
	return `${entity.name}, ${addressLine}. Registration number ${entity.registrationNumber}, tax number ${entity.taxId}, VAT ID ${entity.vatId} (identified under Article 78(4) ZDDV-1; no VAT is charged on supplies in Slovenia, Article 94 ZDDV-1).`;
}
