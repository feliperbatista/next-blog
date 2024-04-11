import { CATEGORIES_URL } from '@/config/app-config';
import { CategoryData } from '@/domain/categories/category';
import { fetchJson } from '@/utils/fetch-json';

export const getAllCategories = async (query = ''): Promise<CategoryData[]> => {
  const url = `${CATEGORIES_URL}&${query}`;
  const categories = await fetchJson<CategoryData[]>(url);
  return categories;
};
