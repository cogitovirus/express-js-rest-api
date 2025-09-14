import { findAllEnterprises, findEnterpriseById } from '../repositories/enterpriseRepository.js';

export async function getEnterprisesService(limit: number, offset: number) {
  return await findAllEnterprises(limit, offset);
}

export async function getEnterpriseByIdService(id: number) {
  return await findEnterpriseById(id);
}
