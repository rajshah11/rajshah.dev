export const PostLayoutKeys = ["post", "post_with_table"];
export type PostLayoutKeysType = typeof PostLayoutKeys[number];

export const LayoutKeys = ["index", "posts", "about"];
export type LayoutKeysType = typeof LayoutKeys[number] | PostLayoutKeysType;

export type LayoutProps = {
  title?: string;
  children: React.ReactElement;
};
