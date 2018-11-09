module.exports = ipsum => `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
        <title>Serverless lorem ipsum generator</title>
    </head>
    <body>
      <section class="section">
        <div class="container">
          <h1 class="title">
            Serverless lorem ipsum generator
          </h1>
          <p class="subtitle">
            ${ipsum}
          </p>
        </div>
      </section>
      </body>
    </html>`;
