export type PostID = number;

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: AuthorAttributesData;
  };
};

export type AuthorAttributesData = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: CategoryAttributesData;
  };
};

export type CategoryAttributesData = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostCover = {
  data: [
    {
      id: PostID;
      attributes: PostCoverAttributes;
    },
  ];
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCoverAttributes = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type PostAttributesData = {
  title: string;
  content: ContentData;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: PostAuthor;
  category: PostCategory;
  cover: PostCover;
};

export type ContentData = {
  data: [{ type: string; children: ContentChildrenData }];
};

export type ContentChildrenData = {
  data: [{ text: string; type: string }];
};

export type PostData = {
  id: PostID;
  attributes: PostAttributesData;
};

export type PostsResponse = {
  data: PostData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
