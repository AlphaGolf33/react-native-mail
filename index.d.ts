export namespace Mailer {
  function mail(
    options: {
      subject: string;
      body: string;
      isHTML: boolean;
      recipients?: [string];
      ccRecipients?: [string];
      bccRecipients?: [string];
      attachment?: {
        /**
         * The absolute path of the file from which to read data.
         */
        path: string;
        /**
         * Mime Type: jpg, png, doc, ppt, html, pdf, csv
         */
        type: string;
        /**
         * Optional: Custom filename for attachment
         */
        name?: string;
      };
    },
    callback: (
      error: string,
      /**
       * On Android, the callback will only be called if an error occurs. The event argument is unused!
       */
      event: string
    ) => void
  ): void;
}

export default Mailer;
