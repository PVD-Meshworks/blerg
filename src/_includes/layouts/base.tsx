export default ({ title, children }: Lume.Data) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/reset.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  </>
);
