// Who sells version.cam, from src/data/entity.json. Until it names a company,
// every legal page shows its placeholders and a draft mark.
import entity from '../data/entity.json';

export const company = entity.name ?? '[the company]';
export const address = entity.address ?? '[its registered address]';
export const registration = entity.registration ?? '[its registration number]';
export const vat = entity.vat ?? '[its VAT number]';
export const email = entity.email ?? '[its contact address]';
