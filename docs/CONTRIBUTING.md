# Contributor guide

## Code of conduct

We are committed to providing a welcoming and inspiring community for all. We
expect participants to act professionally and respectfully towards others,
regardless of age, ethnicity, gender identity and expression, level of
experience, education, socio-economic status, nationality, personal appearance,
race, religion, or sexual identity and orientation. Harassment, discrimination,
or any form of inappropriate behavior will not be tolerated. This code applies
to all project-related spaces, including issue trackers, chat rooms, mailing
lists, and forums.

## Getting started

To set up the project, please clone it into your workspace.

Make sure you have [node (lts)](https://nodejs.org/en) and
[git](https://git-scm.com/downloads) installed.

Run `npm install` in the project root to install all dependencies.

We recommend you work in VS Code.

## Testing

The full suite of tests can be run with `npm run test`. In addition, there are
some utility commands to test specific exercises:

```bash
npm run test:1a
npm run test:1a
npm run test:2a
npm run test:2b
npm run test:3a
npm run test:3b
```

Please use these to verify your solutions as you go.

## How to contribute

Ensure you work directly on the `dev` branch. This is a long-lived branch and is
where we do all of our feature development work. Make sure you `git pull` before
you `git push` in order to resolve any conflicts locally first.

Make frequent pull requests into the `main` branch in order for your changes to
go live.

Do not modify, delete or work on the `feedback` branch or any pull requests to
or from this branch. This branch and its pull requests are an essential part of
our code review process.

As you complete tickets, please update your progress in [TODO.md]('./TODO.md')
so that project managers can track progress and burndown.
