import dayjs from "dayjs";
import Link from "next/link";
import { css } from "styled-components";
import { PostFrontmatterType } from "../../api/posts/Posts.types";
import * as Styled from "./PostsTable.styled";

const TitleAndDateCustomCss = css`
  ${(props) => css`
    border-radius: 0.5em;
    padding-left: 0.25em;
    padding-right: 0.25em;
    padding-bottom: 0.5em;
    &:hover {
      background-color: ${props.theme.colors.hoveredUiElementBackground};
      border-color: ${props.theme.colors.hoveredUiElementBorder};
      cursor: pointer;
      border: 0.0625em solid;
      border-color: ${props.theme.colors.uiElementBorder};
      border-radius: 0.5em;
      box-shadow: 0.0625em 0.0625em 2em
        ${props.theme.colors.subtleBordersAndSeperators};
    }
  `}
`;
export const PostsTable = ({
  posts,
}: {
  posts: Array<PostFrontmatterType>;
}) => {
  return (
    <Styled.PostsTable>
      {posts.map((post) => {
        return (
          post.frontmatter?.title && (
            <Link href={`/posts/${post.slug}`} passHref>
              <Styled.TableRow>
                <Styled.TableColumn
                  width="80%"
                  customCss={TitleAndDateCustomCss}
                >
                  <Styled.PostTitleAndDate>
                    <Styled.PostTitle>
                      {post.frontmatter.title}
                    </Styled.PostTitle>
                    {post.frontmatter.date && (
                      <Styled.PostDate>
                        {dayjs(post.frontmatter?.date).format("MMMM DD, YYYY")}
                      </Styled.PostDate>
                    )}
                  </Styled.PostTitleAndDate>
                </Styled.TableColumn>

                {post.frontmatter.categories && (
                  <Styled.TableColumn width="20%">
                    <Styled.PostCategories>
                      {post.frontmatter.categories.split(",").map((c) => {
                        return (
                          <Styled.PostCategoryLabel>
                            {c.trim().toUpperCase()}
                          </Styled.PostCategoryLabel>
                        );
                      })}
                    </Styled.PostCategories>
                  </Styled.TableColumn>
                )}
              </Styled.TableRow>
            </Link>
          )
        );
      })}
    </Styled.PostsTable>
  );
};
