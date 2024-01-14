import { request, gql } from "graphql-request";

const MASTER_URL = `https://ap-south-1.cdn.hygraph.com/content/${process.env.EXPO_PUBLIC_GRAPHQL_MASTER_API_KEY}/master`;

export const getCourseList = async (level) => {
  const query =
    gql`
    query Courses {
      courses(where: { level: ` +
    level +
    ` }) {
        id
        name
        price
        level
        tags
        time
        author
        description {
          markdown
        }
        banner {
          url
        }
        chapters {
          content {
            heading
            description {
              markdown
              html
            }
            output {
              markdown
              html
            }
          }
          title
          id
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
