import { findAllEnterprises } from '../repositories/enterpriseRepository.js';

export async function getEnterprisesService(limit: number, offset: number) {
  return await findAllEnterprises(limit, offset);
}
