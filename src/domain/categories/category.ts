export type CategoryResponse = {
  data: CategoryData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type CategoryData = {
  id: number;
  attributes: CategoryAttributesData;
};

export type CategoryAttributesData = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  posts: PostData;
};

export type PostAttributesData = {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostData = {
  id: number;
  attributes: PostAttributesData;
};
