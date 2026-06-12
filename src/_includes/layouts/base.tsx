export default ({ title, children }: Lume.Data) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/fonts.css" />
        <link rel="stylesheet" href="/styles/colors.css" />
        <link rel="stylesheet" href="/styles/base.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  </>
);
