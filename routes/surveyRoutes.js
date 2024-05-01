const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = mongoose.model('surveys')
const Mailer = require('../services/Mailer');
const template = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      const mailer = new Mailer(survey, template(survey));
      await mailer.send();
      await survey.save();
  
      req.user.credits -= 1;
      const user = await req.user.save();
  
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
