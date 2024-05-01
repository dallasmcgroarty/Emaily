const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a style="padding: 6px 10px;
            background-color: lightgreen;
            border-radius: 5px;
            color: black;
            display: inline-block;
            width: 75px;
            text-decoration: none;" 
            href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>

            <a style="padding: 6px 10px;
            background-color: lightcoral;
            border-radius: 5px;
            color: black;
            display: inline-block;
            width: 75px;
            text-decoration: none;" 
            href="${keys.redirectDomain}/api/surveys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
}
