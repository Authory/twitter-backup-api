import { Content } from "./content"

export type ExportedContent = {
  /**
   * The content item as structured data.
   */
  content: Content

  /**
   * Original URL of content item..
   */
  url: string

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
}

export type ExportedTwitterArchive = {
  /**
   * List of tweets or threads.
   */
  content: ExportedContent[]
  /**
   * ISO-8601 timestamp of the export.
   */
  exportDate: string
  /**
   * API Version
   */
  version: "1.0.0"
}