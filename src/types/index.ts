import type { ObjectId } from "mongodb";

export type PostType = {
  userRef: ObjectId;
  title: String;
  post: String;
};
