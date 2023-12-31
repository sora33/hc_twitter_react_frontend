import { Comment } from "features/comment/commentTypes";
import { apiClient } from "lib/axios/apiClient";

export type CommentParams = Pick<Comment, "tweetId" | "content" | "image"> & {
  image: FileList | null;
};

export const getComments = async (id: number | string) => {
  try {
    const res = await apiClient.get<Comment[]>(`tweets/${id}/comments`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postComment = async (params: CommentParams) => {
  const { content, tweetId, image } = params;
  try {
    const res = await apiClient.post<Comment>("comments", { content, tweetId });
    if (!image || image.length === 0) {
      return res;
    } else {
      const commentId = res.data.id;
      const formData = new FormData();
      formData.append("imageable_type", "comment");
      formData.append("imageable_id", commentId.toString());
      formData.append("image", image[0], image[0].name);
      const resImg = await apiClient.post(`images`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      return resImg;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteComment = async (id: number) => {
  try {
    const res = await apiClient.delete(`comments/${id}`);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
