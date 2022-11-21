import { Content } from "./content"

export type TwitterBackupApiQueryParams = {
  /**
   * How many items to skip.
   */
  skip?: number
  /**
   * How many items to fetch.
   */
  take?: number
  /**
   * Fuzzy full-text search.
   */
  text?: string
}

export type TwitterBackupApiContent = {

  /**
   * The content item as structured data.
   */
  contentDetail: Content

  /**
   * Original URL of content item..
   */
  pageUrl: string

  /**
   * ISO-8601 timestamp, when this content was published.
   */
  date: string

  /**
   * Description, for display.
   */
  description: string

  /**
   * The content type.
   */
  type: string

  // There are some other fields which
  // are used by Authory and not directly
  // related to Twitter.
}

export type TwitterBackupApiResponse = {
  /**
   * List of tweets or threads.
   */
  articles: TwitterBackupApiContent[]
  /**
   * Counts of different content types for this user.
   */
  typeCounts: { [key: string]: number }
  /**
   * Count of results with text search applied.
   */
  filteredCount: number
  /**
   * ISO-8601 Timestamp of oldest content item. Useful for date/time pickers.
   */
  oldestArticle: string
  /**
   * For future use.
   */
  pinned: null

}