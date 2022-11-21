//
// This is the type definition for a subset of the Authory API. 
//

/**
 * Known content types. We only distinguish between 
 * post and thread.
 */
 export enum ContentDetailType {
  Post = "post",
  Thread = "thread"
}

/**
 * Attachment types
 */
export enum PostAttachment {
  link = "link",
  video = "video",
  image = "image",
  imageCarousel = "imageCarousel",
  post = "post",
  document = "document",
}

/**
 * Post attachment - another post.
 */
export interface SharedPost {
  type: PostAttachment.post;
  post: Post;
}

/**
 * Post attachment - a link.
 */
export interface SharedLink {
  type: PostAttachment.link;
  href: string;
  text: string;
  previewImageUrl: string | null;
}

/**
 * Post attachment - a shared video.
 */
export interface SharedVideo {
  type: PostAttachment.video;
  videoUrl: string;
  thumbnailUrl: string | null;
  /**
   * Mime type of the video, if available.
   */
  contentType?: string;
}

/**
 * Post attachment - an image.
 */
export interface SharedImage {
  type: PostAttachment.image;
  src: string;
}

/**
 * Post attachment - any document.
 */
export interface SharedDocument {
  type: PostAttachment.document;
  title: string;
  src: string;
}

/**
 * Post attachment - multiple images.
 */
export interface ImageCarousel {
  type: PostAttachment.imageCarousel;
  srcs: string[];
}

/**
 * Describes detailed author info of a post,
 * including profile images.
 */
export interface PostAuthorInfo {
  displayName: string;
  profileUrl?: string;
  profileImageUrl?: string;
}

/**
 * Post.
 */
export interface Post {
  html: string;
  by: string | PostAuthorInfo;
  attachment: PostAttachmentDetail | PostAttachmentDetail[];
  type: ContentDetailType.Post;
}

/**
 * Thread, a list of posts.
 */
export interface Thread {
  type: ContentDetailType.Thread
  by: string | PostAuthorInfo;
  posts: Post[]
}

/**
 * Type unions for things attached to a post.
 */
export type PostAttachmentDetail =
  | SharedPost
  | SharedLink
  | SharedVideo
  | SharedImage
  | ImageCarousel
  | SharedDocument
  | null;


/**
 * Content is either post or a thread.
 */
export type Content = Post | Thread