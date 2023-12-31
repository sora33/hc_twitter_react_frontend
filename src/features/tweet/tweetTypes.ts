import { User } from "features/user/userTypes";
export interface Tweet {
  id: number;
  user: User;
  content: string;
  image: FileList | null;
  commentsCount: number;
  retweets: {
    count: number;
    isRetweeted: boolean;
  };
  favorites: {
    count: number;
    isFavorited: boolean;
  };
  isBookmarked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
