declare namespace formatDuration {
  interface FormatDurationOptions {
    /**
     * Adds leading zero to the formatted string.
     */
    leading?: boolean
  } & ({
    ms?: boolean
  } | {
    ms: boolean
    msDigits?: number
  })
}

/**
  * Convert a number in milliseconds to a standard duration string.
  * 
  * @param {number} ms The number to format.
  * @param {object} options - Formatting options
  * @returns {string} The formatted duration string.
  */
declare function formatDuration(
  ms: number,
  options?: formatDuration.FormatDurationOptions
): string
export = formatDuration
